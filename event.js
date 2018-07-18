// var eventEmittter = require('events').EventEmitter;
// var event = new eventEmittter();
// event.on('someEvent',function(){
// 	console.log("some_event!!!");
// });
// setTimeout(function(){
// 	event.emit('someEvent');
// },1000);


// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on('someEvent',function(arg1, arg2){
// 	console.log('listeren',arg1,arg2);
// });
// emitter.emit('someEvent','Max',10);


// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.emit('error');


// function say(word){
// 	console.log(word);
// }
// function excute(someFunction, value){
// 	someFunction(value);
// }
// excute(say,"Hello");


// function excute(someFunction, value){
// 	someFunction(value);
// }
// excute(function(word){
// console.log(word);
// },"effy is beautiful");


var http = require('http');
var url = require('url');
function start(){
	function onRequest(request, response){
		console.log("request=="+request);
		var pathName = url.parse(request.url).pathname;
		console.log("Request for " + pathName + "received.");
		response.writeHead(200, {"Content-type" : "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen
}
console.log("test")
