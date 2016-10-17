var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit("user:leave", { 
      message: "An user has disconnected from the server.",
      color: "#000"
    });
  });

  socket.on('user-leave', function(){
    console.log('user leave');
    io.emit("user:leave", {
      message: "An user has leave from the server.",
      color: "#000"
    });
  });

  socket.on('user-join', function(color){
    console.log('user join', color);
    io.emit("user:join", {
      message: "An user has join to the server.",
      color: color
    });
  });

  socket.on('user-typing', function(color){
    //console.log('user typing', color);
    socket.broadcast.emit("user:typing", {
      message: "User is typing a message.",
      color: color
    });
  });

  socket.on("new-message", function(msg){
    console.log('user send a message', msg.message);
    io.emit("receive-message", msg);
  });


});

app.set('port', 3000);
app.use(express.static(__dirname + '/src'));
app.use('/components', express.static(__dirname + '/bower_components'));


// Serve static files
app.get('/', function(req, res) {
  res.sendFile(express.static(__dirname + '/index.html'));
});

http.listen(app.get('port'), function(){
  console.log('Express chat server on port ' + app.get('port'));
});