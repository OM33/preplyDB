'use strict'


var mongoose = require('mongoose');
const app = require('./app');

app.set('port', process.env.PORT || 3700);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Preply-Database').then(() => {
    app.listen(port, () => {
        console.log('connection stablished with success in localhost:3700');
    });
})
    .catch(err => console.log(err));