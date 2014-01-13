// res.send(new resultModel.result(false, null, 'Password must be at least 8 characters'));

var garageModel = require('../models/garage.js');
var resultModel = require('../models/result.js');
var GarageProvider = require('../providers/garageProvider').Garage;
var garageProvider = new GarageProvider();

/*
 * Garage CRUD operations
 */

// return garage by id
exports.read = function(req, res){
    garageProvider.findById(req.params.id, function(error, garage){
        res.send(new resultModel.result(true, garage));
    });
};

// return all activity
exports.readAll = function(req, res){
    garageProvider.findAll(function(error, garages){
        res.send(new resultModel.result(true, garages));
    });
};

// create a garage
exports.create = function(req, res){
    var newGarage = new garageModel.Garage(req.body.description,
        req.body.start_date, req.body.end_date, req.body.latitude,  req.body.longitude, req.body.address);

    garageProvider.save(newGarage, function(error, garage) {
        res.send(new resultModel.result(true, garage));
    });
};

// update garage
exports.update = function(req, res){

    if(!req.body.start_date || !req.body.description || !req.body.end_date || !req.body.latitude || !req.body.longitude || !req.body.address)
        res.send({status: false});
    else {
        var garage = new garageModel.Garage(req.body.description,
            req.body.start_date, req.body.end_date, req.body.latitude, req.body.longitude, req.body.address);

        garageProvider.update(req.params.id, garage, function(error, garage) {
            res.send(new resultModel.result(true, garage));
        });
    }
};

// delete activity
exports.delete = function(req, res){
    garageProvider.delete(req.params.id, function(error, garage) {
        res.send({status: true});
    });
};