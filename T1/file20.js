// write nodejs to request server to display json data on browser
let ob = {
  Name: "Hitesh",
  Age: 70,
  Gender: "Trans",
  Country: "Pakistan",
};
let http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/json" });
    res.write(JSON.stringify(ob));
    res.end();
  })
  .listen(3130);
