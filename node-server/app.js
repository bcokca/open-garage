var express = require('express');
var routes = require('./routes');
var garage = require('./routes/garage');
var http = require('http');
var path = require('path');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');


// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(cors());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

const authCheck = jwt({
    secret: new Buffer('zlcBl1xSOr6l86xD-dsUflyrC8k_hO44fKqDvphjuO68E4iDHMb6w9mqpktJ-iVH', 'base64'),
    audience: 'E9V3eNScjL3OWtvGA8eMrEF179KOOAOc'
});


//avoid cross origin problem
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    next();
});



// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// home
app.get('/', routes.index);

// get all garages -- public api
app.get('/garage', garage.readAll);

// get activity by id
app.get('/garage/:id', garage.read);

// create activity
app.post('/garage', authCheck, garage.create);

// update activity by id
app.post('/garage/:id', authCheck, garage.update);

// delete activity by id
app.delete('/garage/:id', authCheck, garage.delete);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
