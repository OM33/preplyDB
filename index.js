'use strict'

var port = 3700;
var mongoose = require('mongoose');
const app = require('./app');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Preply-Database').then(() => {
    app.listen(port, () => {
        console.log('conexion establecida con exito en la url localhost:3700');
    });
})
    .catch(err => console.log(err));