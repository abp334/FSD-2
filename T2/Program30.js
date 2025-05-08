// create one pug file which contains a text field and email field by submitting the form on next page submitted data will be
// displayed.
var expr = require("express");
var app = expr();
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render(__dirname + "/pugfile");
});
app.get("/next", (req, res) => {
  var text = req.query.textfield;
  var email = req.query.email;
  res.write("<h1>Your text: " + text + " ,Your email is: " + email + "</h1>");
  res.end();
});
app.listen(4080);
