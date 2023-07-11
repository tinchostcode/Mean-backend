const express=require('express'); // llamamos al modulo
const mongoose= require('mongoose');
require('dotenv').config();

const app=express(); //
// process.env.port sirve cuando despleguemos la app en un host usariamos el port 
// que nos de ese servidor y no el 9000
const port= process.env.port|| 9000; 

 

//mongoose connection
mongoose
.connect(process.env.uri)
.then(()=> console.log('conectado a Mongo....'))
.catch((error)=>console.error(error)); 

app.use(express.json()); // Habilitamos json para que se pueda enviar a nuestra aplicacion.

app.use('/api/productos', require('../routes/producto'));

//express.listen(port, () => console.log('asd',port));
// accedemos al metodo listen de express
app.listen(port, () => console.log('server up ',port));
