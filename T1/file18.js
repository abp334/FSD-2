//add query string in url at browser and request server to display data
var http = require("http");
var url = require("url");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    let q = url.parse(req.url, true).query;
    let date = q.year + " " + q.month;
    res.end(date);
  })
  .listen(3002);
