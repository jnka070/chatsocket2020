module.exports= function(io){
    io.on('connection', socket => {
        console.log('un nuevo usuario conectado');
        
        socket.on('enviando mensaje', function(data){
            io.sockets.emit('nuevo mensaje', data);//va reenviar el mensaje a todos los cliente con io, socket es solo para un cliente

        });


    });
}