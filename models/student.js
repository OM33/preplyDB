'use strict'

//importando mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentSchema = Schema({
    'name': String,
    'Real_name': String,
    'email': String,
    'location': String,
    'dif_time': Number,
    'langs': String,
    'age': Number,
    'level': String,
    'platform': String,
    'motives': String,
    'goals': String,
    'interests': String,
    'music': String,
    'obs': String,
    'image': String
});
    module.exports = mongoose.model(
        'Student', StudentSchema
    );

// students > guarda los documentos en robo3T