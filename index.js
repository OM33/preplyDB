'use strict'

var mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config({path:'.env'});

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DBLOCAL).then(() => {
    app.listen(port, host, () => {
        console.log('connection stablished with success in localhost 3700');
    });
})
    .catch(err => console.log(err));

