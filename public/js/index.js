var socket =   io(); //this is the method which sends request from client to server to open up and maintaining a connection
socket.on('connect',function(){
     console.log('connected to server');

     
})

socket.on('newMessage',function(message){
    console.log(message);
})

socket.on('disconnect',function(){
     console.log("Disconnected from server");


});


