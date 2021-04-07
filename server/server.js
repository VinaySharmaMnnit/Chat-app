//path is used to take the path of index.html

const path= require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
var PORT = process.env.PORT || '3000';

var app  = express();
//app contains this http.createServer(app) is doing all that is done by server in the background
//ut to configure socket.io we used this server
var server  = http.createServer(app);
const PublicPath = path.join(__dirname,'../public/');

app.use(express.static(PublicPath));

var io = socketIO(server);

io.on('connection',function(socket){
    console.log("New User Connected");

   socket.on('createMessage',function(message){
       console.log('createMessage',message);
   })

   socket.emit('newMessage',{
       from:"Vinay@gmail.com",
       text:"Hello"
   })
    socket.on('disconnect',function(){
        console.log("User is disconnected");
    })
})


//console.log(PublicPath);

server.listen(PORT,()=>{
    console.log(`Starting server on port ${PORT}`);
})