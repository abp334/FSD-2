// write nodejs to perform task such as:
// 1) create one page with two links home and about
// 2) Both pages must contain html type content and add required details on both the pages
// 3) if user adds any other url path then he or she will be redirected to page with plain message that will be displayed page not found
let http = require("http");
let url = require("url");
http
  .createServer(function (req, res) {
    if (req.url == "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Home Page </h1>");
    } else if (req.url == "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> About Us </h1>");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("404 Page Not Found");
    }
    res.end();
  })
  .listen(3130);
