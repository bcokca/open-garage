var express = require('express');
var routes = require('./routes');
var garage = require('./routes/garage');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// home
app.get('/', routes.index);

// get all activities
app.get('/garage', garage.readAll);

// get activity by id
app.get('/garage/:garageID', garage.read);

// create activity
app.put('/garage', garage.create);

// update activity by id
app.post('/garage/:garageID', garage.update);

// delete activity by id
app.delete('/garage/:garageID', garage.delete);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
