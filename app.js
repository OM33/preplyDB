var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//middlewares


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargar rutas
app.get('/test', (req, res)=>{
    res.status(200).send({
        message: "Hola mundo desde mi Api"
    });
});

app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Inicio, vamos que si se puede!!! tu puedes Olga</h1>"
    );
});

app.post('/test2/:id', (req, res)=>{
    console.log(req.query.web);
    console.log(req.params.id);
    console.log(req.body.name);

    res.status(200).send({message:'Hola a todos desde mi API rest'});
});




//CORS

//Rutas

//Exportar
module.exports = app;