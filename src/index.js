 
const http= require('http');
const path= require('path');

const express= require('express');
const socketio=require('socket.io');


const app=express();

const server=http.createServer(app);//creo el servidor y le paso todo el codigo de app
const io=socketio.listen(server);

//setting
app.set('port', process.env.PORT||3000);
 

require('./sockets')(io);//envia como parametro io a al socket.js

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));
//empezando el servidor
server.listen(app.get('port'),() =>{
    console.log('servidor en puerto', app.get('port'))
});

 
