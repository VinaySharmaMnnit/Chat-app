
var socket =   io(); //this is the method which sends request from client to server to open up and maintaining a connection
socket.on('connect',function(){
     console.log('connected to server');

     
})

socket.on('newMessage',function(message){
    //console.log(message);
    var template = jQuery('#message-template').html();
    var time = moment(message.Created_At).format('h:mm:ss a');
    var html = Mustache.render(template,{
        text:message.text,
        from:message.from,
        Created_At:time
    });

    jQuery('#messages').append(html);
    // var time = moment(message.Created_At).format('h:mm:ss a');
    // var li = jQuery('<li></li>');
    // li.text(`${message.from} [${time}]:${message.text}`);
    // jQuery('#messages').append(li);
})

socket.on('disconnect',function(){
     console.log("Disconnected from server");


});



// socket.emit('createMessage',{
//     from:'Looka',
//     text:'Hey This is Looka'
// },function(data){
//     console.log('Acknowledged',data);
// });

jQuery('#message-form').on('submit',function(e){
    e.preventDefault(); //this prevents the refreshing of page at the time of sending messages
    var messageText =jQuery('[name=message]');
    socket.emit('createMessage',{
        from:'User',
        text:messageText.val(),
        
    },function(){
        messageText.val('')   //this is for remove the message from message area
    })
})


