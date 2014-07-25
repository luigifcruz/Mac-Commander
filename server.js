//  Library
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);
var exec = require('child_process').exec;
readline = require("readline");


server.listen(10000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  	socket.on('commandLine', function(data){
		console.log(data);
		if (data == "iTunesPlay") {
			var exec = require('child_process').exec;
			exec('osascript /Users/luigifcruz/Desktop/play.scpt');	
			exec('osascript /Users/luigifcruz/Desktop/music.scpt', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
  				io.sockets.emit('callback', "iTunes Now Playing " + stdout);
			});	
		}
		if (data == "iTunesPause") {
			var exec = require('child_process').exec;
			exec('osascript /Users/ma/pause.scpt', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
  				io.sockets.emit('callback', "iTunes Paused");
			});	
		}
		if (data == "iTunesNext") {
			var exec = require('child_process').exec;
			exec('osascript /Users/ma/next.scpt', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
			});	
			exec('osascript /Users/ma/music.scpt', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
  				io.sockets.emit('callback', "iTunes Now Playing " + stdout);
			});	
		}
		if (data == "iTunesMusic") {
			var exec = require('child_process').exec;
			exec('osascript /Users/ma/music.scpt', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
  				io.sockets.emit('callback', "iTunes Playing " + stdout);
			});	
		}
		if (data == "uptime") {
			var exec = require('child_process').exec;
			exec('uptime', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
  				io.sockets.emit('callback', stdout);
			});	
		}
		if (data == "sayHello") {
			var exec = require('child_process').exec;
			exec('osascript /Users/ma/hello.scpt', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
			});	
		}
		if (data == "NotifyMe") {
			var exec = require('child_process').exec;
			exec("terminal-notifier -title 'Mac Commander' -message 'Hey :)' -open 'http://localhost:21000'", function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
			});	
		}
		if (data == "SendMeHere") {
			var exec = require('child_process').exec;
			exec("terminal-notifier -title 'Mac Commander' -message 'Click Here' -open 'http://localhost:21000'", function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
			});	
		}
	var code = data.split(" ");
		if (code[0] == "message") {
			var exec = require('child_process').exec;
			exec('osascript /Users/luigifcruz/Desktop/message.scpt "' + code[1] + '" "' + code[2] + '"', function (error, stdout, stderr) {
  				// output is in stdout
  				console.log(stdout);
  				io.sockets.emit('callback', stdout);
			});	
		}


	});
});




