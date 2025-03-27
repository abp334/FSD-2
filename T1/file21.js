// write nodejs program to load a simple html file from static url on nodejs server and print its content as html content
let url = require("url");
let http = require("http");
let fs = require("fs");
var address = "http://localhost:6051/nodejs/index.html";
var server = http.createServer(function (req, res) {
  var q = url.parse(address, true);
  data = fs.readFileSync("." + q.pathname);
  res.writeHead(200, { "content-type": "text/html" });
  res.write(data);
  res.end();
});
server.listen(6051);
