var express = require("express");
var app = express(); //new instance is created by calling function(object is made)
app.get("/", function (req, res) {
  //app.get(route,callback)
  res.set("content-type", "text/plain"); //res.set(field,value) instead of writeHead()
  res.send("hello"); //res.send() instead of res.end()
});
app.listen(3000); //app.listen(port,host,callback)
/*
methods of res
res.write()
res.end()
res.send()
res.json()
res.redirect()
res.render()
res.sendfile()
*/
