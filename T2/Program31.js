// write express js to parse data like message,name,id from express app to pug template in h1,h2,h3
// tags respectively and display data in browser
var expr = require("express");
var app = expr();
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render(__dirname + "/pugfile", { message: "Hello", name: "LJ", id: "2" });
});
app.listen(5080);
