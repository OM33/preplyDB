'use strict'

var port = 3700;
var mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://olga:preplydb123@preplycluster0.gdoha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    app.listen(port, () => {
        console.log('connection stablished with success in heroku');
    });
})
    .catch(err => console.log(err));

app.set('port', process.env.PORT || 3700);