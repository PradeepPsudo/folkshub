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
var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

 //app.listen(8080);
 app.listen(process.env.PORT || 5000);

function handler(req, res) {
    fs.readFile('./index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
            console.log("Gotta you read me and the content is here");
        });
}

io.sockets.on('connection', function (socket) {
	console.log("i am inside socket");
   /* socket.emit('news', {
        hello: 'world'
    });*/
    //socket.on('connection', function (data) {
        socket.on("clientMsg",function(data){
        	socket.emit("serverMsg",data);
        	socket.broadcast.emit("serverMsg", data);
        });
        socket.on("sender", function (data) {
		    socket.emit("sender", data);
		    socket.broadcast.emit("sender", data); //Broadcast the user typing to 
		});
    });
//});