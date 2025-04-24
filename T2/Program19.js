// Write one express script to perform following task:
// create one html file and add one form which contains username, password and submit button.
// Data should be submitted by http post method.
// submit button is of black color with white text(external css).
// on home page form should be displayed and while submitting the form next page named login if username is admin it will display welcome admin
// else display please login with admin name.
var expr = require("express");
var app = expr();
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
app.post("/home", (req, res) => {
  res.set("content-type", "text/html");
  if (req.body.fname == "admin") {
    res.write("<h1>Welcome admin</h1>");
  } else {
    res.write("<h1>Please login with admin name</h1>");
  }
  res.end();
});
app.listen(3009);
