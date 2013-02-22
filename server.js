var http = require("http");
var querystring = require("querystring");

http.createServer(function (request, response) {
	var postdata = "";
	request.setEncoding("utf-8");
	request.on("data", function(chunk){
		postdata += chunk;
	});
	request.on("end", function(){
		response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
		var param = querystring.parse(postdata)["name"];
		response.end("Hello "+param);
	});
	
}).listen(8080);