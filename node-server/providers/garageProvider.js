var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var dbConfig = require('../config.js').dbConfig;

GarageProvider = function () {
    this.db = new Db(dbConfig.dbName, new Server(dbConfig.host, dbConfig.port, {auto_reconnect: true}, {}), {safe: true});
    this.db.open(function () {
    });
};

GarageProvider.prototype.getCollection = function (callback) {
    this.db.collection(dbConfig.dbName, function (error, garage_collection) {
        if (error) callback(error);
        else callback(null, garage_collection);
    });
};

GarageProvider.prototype.findAll = function (callback) {
    this.getCollection(function (error, garage_collection) {
        if (error) {
            callback(error);
        }
        else {
            garage_collection.find().toArray(function (error, results) {
                if (error) {
                    callback(error);
                }
                else {
                    callback(null, results);
                }
            });
        }
    });
};

GarageProvider.prototype.findById = function (id, callback) {
    this.getCollection(function (error, garage_collection) {
        if (error) callback(error);
        else {
            garage_collection.findOne({"_id": ObjectID(id)},
                function (error, result) {
                    if (error) callback(error);
                    else callback(null, result);
                });
        }
    });
};

GarageProvider.prototype.save = function (garages, callback) {
    this.getCollection(function (error, garage_collection) {
        if (error) callback(error)
        else {
            if (typeof(garages.length) == "undefined")
                garages = [garages];

            garage_collection.insert(garages, function () {
                callback(null, garages);
            });
        }
    });
};

GarageProvider.prototype.update = function (id, garage, callback) {
    this.getCollection(function (error, garages) {
        if (error) callback(error);
        else {
            garages.findAndModify({_id: garages.db.bson_serializer.ObjectID.createFromHexString(id)},
                [['_id', 1]], {$set: garage}, {new: true}, function (error, garage) {
                if (error) callback(error);
                else callback(null, garage)
            });
        }
    });
};

GarageProvider.prototype.delete = function (id, callback) {
    this.getCollection(function (error, garage_collection) {
        if (error) callback(error);
        else {
            garage_collection.remove(
                {_id: garage_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function (error, garage) {
                    if (error) callback(error);
                    else callback(null, garage)
                });
        }
    });
};
exports.Garage = GarageProvider;