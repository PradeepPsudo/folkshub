/*var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	fs = require('fs');
app.listen(80);

function handler(req,res){
	fs.readFile("./index.html",function(err,data){
		if(err){
			res.writeHead(500);
			return res.end('Error in Loading index.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}
io.socket.on('connection',function(){
	socket.emit('news',{
		hello:"world"
	});
	socket.on('my other event',function(data){
		console.log(data);
	});
});
*/


// var app = require('http').createServer(handler),
//     io = require('socket.io').listen(app),
//     fs = require('fs');

//  //app.listen(8080);
//  app.listen(process.env.PORT || 5000);

// function handler(req, res) {
//     fs.readFile('./index.html',
//         function (err, data) {
//             if (err) {
//                 res.writeHead(500);
//                 return res.end('Error loading index.html');
//             }
//             res.writeHead(200);
//             res.end(data);
//             console.log("Gotta you read me and the content is here");
//         });
// }

// io.sockets.on('connection', function (socket) {
// 	console.log("i am inside socket");
//    /* socket.emit('news', {
//         hello: 'world'
//     });*/
//     //socket.on('connection', function (data) {
//         socket.on("clientMsg",function(data){
//         	socket.emit("serverMsg",data);
//         	socket.broadcast.emit("serverMsg", data);
//         });
//         socket.on("sender", function (data) {
// 		    socket.emit("sender", data);
// 		    socket.broadcast.emit("sender", data); //Broadcast the user typing to 
// 		});
//     });
//});



// var app = require('express')();
// // var http = require('http').Server(app);
// // var io = require('socket.io')(http);
// var server = app.listen(process.env.PORT || 5000);

// var io = require('socket.io').listen(server);

// app.get('/', function(req, res) {
//     res.sendfile('index.html');
// });

// app.listen(process.env.PORT || 5000);

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// // http.listen(3000, function () {
// //   console.log('listening on *:3000');
// // });


// io.sockets.on('connection', function (socket) {
// 	console.log("i am inside socket");
//    /* socket.emit('news', {
//         hello: 'world'
//     });*/
//     //socket.on('connection', function (data) {
//         socket.on("clientMsg",function(data){
//         	socket.emit("serverMsg",data);
//         	socket.broadcast.emit("serverMsg", data);
//         });
//         socket.on("sender", function (data) {
// 		    socket.emit("sender", data);
// 		    socket.broadcast.emit("sender", data); //Broadcast the user typing to 
// 		});
// });

// // http.listen(process.env.PORT || 5000, function () {
// // 	console.log('listening on *');
// //   });

// http.listen(4000, function () {
// 	console.log('listening on *:3000');
//   });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const io = require("socket.io")(server, {
	// ...
  });
  
//   io.on("connection", (socket) => {
// 	// ...
//   });
  io.sockets.on('connection', function (socket) {
	console.log("i am inside socket");
   /* socket.emit('news', {
        hello: 'world'
    });*/
    //socket.on('connection', function (data) {
        socket.on("clientMsg",function(data){
			console.log("clientMsg data:",data);
        	socket.emit("serverMsg",data);
        	socket.broadcast.emit("serverMsg", data);
        });
        socket.on("sender", function (data) {
			console.log("sender data:",data);
		    socket.emit("sender", data);
		    socket.broadcast.emit("sender", data); //Broadcast the user typing to 
		});
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

server.listen(3000, () => {
  console.log('listening on *:3000');
});