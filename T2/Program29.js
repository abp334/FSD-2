var expr = require("express");
var app = expr();
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render(__dirname + "/pugfile");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.listen(3007);
