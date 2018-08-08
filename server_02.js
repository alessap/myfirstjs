// var http = require('http');
// var fs = require('fs');

// //create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// console.log('This example is different!');
// console.log('The result is displayed in the Command Line Interface');

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('js.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content! \n', function (err) {
    if (err) throw err;
    console.log('Saved!');
});