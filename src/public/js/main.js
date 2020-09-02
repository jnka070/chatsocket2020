
$(function(){
    
    const socket= io();
    const $messsageForm=$('#message-form');
    const $messsageBox=$('#message');
    const $chat=$('#chat');

    //eventos
    $messsageForm.submit(e => {
        e.preventDefault();
        socket.emit('enviando mensaje', $messsageBox.val());
        $messsageBox.val(''); 

    }); 

    socket.on('nuevo mensaje', function(data){
        $chat.append(data + '<br/>')
    });  
})