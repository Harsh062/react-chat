# react-chat

Code Challenge for [build a simple, anonymous chat web appplication](./Code_Challenge.pdf) running in node.js with a React front-end.

- [Functionality](#functionality)
  - [Libraries](#libraries)
  - [Installation](#installation)
- [Docs](#docs)
  - [Setup](#setup)
  - [Demo](#demo)


# Functionality
  - Users are able to join the chat server anonimously.
  - Messages are colored to identify which user send they.
  - Users can leave/disconnect from the server anytime.
  - Users joining the chat will see chat messages from the moment they join.
  - Users will see an 'is typing' message when other user is typing a message.


## Libraries

  - node.js / npm
  - socket.io
  - express
  - React
  - Babel
  - Twitter Bootstrap


## Installation

After installing Node.JS (v5.2.0+), Git please make sure you have Bower client.

<code>$ npm install -g bower</code>

Being on the main project folder run:

<code>$ npm install && bower install</code>

And launch run <code>npm start</code>.


## Docs

## Setup

Make sure that you update <strong>server.js</strong>:
<pre>server.listen(app.get('port'), function(){
  console.log('Express Chat server on port ' + app.get('port'));
});</pre>
and add your own IP address/hostname if required, i.e.:
<pre>server.listen(app.get('port'), "137.10.3.52", function(){
  console.log('Express Chat server listening on port ' + app.get('port'));
});</pre>
and the port defined in the <code>app.set('port', 3000);</code>

Please also update <strong>src/chat-component.js</strong>:
<pre>var chatServerAddress = "http://10.0.0.20:3000";</pre>
with the right IP address/hostname.


### Demo

After running your environment you should be able to see:

<img src="https://www.dropbox.com/s/zqsqrmnahslecry/screen.png?dl=1" width="600" />






