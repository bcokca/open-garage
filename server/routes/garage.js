var config = require('../config.js');;
var garageModel = require('../models/garage.js');
var GarageProvider = require('../providers/garageProvider').Garage;
var garageProvider = new GarageProvider(config.dbConfig);

/*
 * Garage CRUD operations
 */

// return garage by id
exports.read = function(req, res){
    garageProvider.findById(req.params.garageID, function(error, garage){
        if(!garage || garage.length == 0)
            res.send({});
        else
            res.send(garage);
    });
};

// return all activity
exports.readAll = function(req, res){
    garageProvider.findAll(function(error, garages){
        if(garages.length == 0)
            res.send({});
        else
            res.send(garages);
    });
};

// create a garage
exports.create = function(req, res){
    var newGarage = new garageModel.Garage(req.body.description,
        req.body.start_date, req.body.end_date, req.body.latitude,  req.body.longitude);

    garageProvider.save(newGarage, function(error, garage) {
        res.send(newGarage);
    });
};

// update garage
exports.update = function(req, res){

    if(!req.body.start_date || !req.body.description || !req.body.end_date || !req.body.latitude || !req.body.longitude)
        res.send({status: false});
    else {
        var garage = new garageModel.Garage(req.body.description,
            req.body.start_date, req.body.end_date, req.body.latitude, req.body.longitude);

        garageProvider.update(req.params.garageID, garage, function(error, garage) {
            res.send(garage);
        });
    }
};

// delete activity
exports.delete = function(req, res){
    garageProvider.delete(req.params.garageID, function(error, garage) {
        res.send({status: true});
    });
};