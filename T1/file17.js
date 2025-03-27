//add static url in code and request server to display data of query string on browser
var http = require("http");
var url = require("url");
var address = "http://localhost:8080/default.html?year=2024&month=feb";
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    var q = url.parse(address, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(3001);
