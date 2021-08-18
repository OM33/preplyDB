var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var student_routes = require('./routes/student');
//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', student_routes);
//cargar rutas
// app.get('/test', (req, res)=>{
//     res.status(200).send({
//         message: "Hola mundo desde mi Api"
//     });
// });

// app.get('/', (req, res)=>{
//     res.status(200).send(
//         "<h1>Inicio, vamos que si se puede!!! tu puedes Olga</h1>"
//     );
// });

// app.post('/test2/:id', (req, res)=>{
//     console.log(req.query.web);
//     console.log(req.params.id);
//     console.log(req.body.name);

//     res.status(200).send({message:'Hola a todos desde mi API rest'});
// });




//CORS

//Rutas

//Exportar
module.exports = app;