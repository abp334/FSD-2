// write express js to set cookies of submitted values of form perform following tasks:
// create html file which contains first name, last name, password and a submit button
// once form is submitted, store all these entered values to the respective cookies on next page. Then redirect user to admin page
// and clear the cookie set for the lastname. Display remaining cookie values on this page.
var expr = require("express");
var app = expr();
var cp = require("cookie-parser");
app.use(cp());
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
app.post("/next", (req, res, next) => {
  res.cookie("fname", req.body.fname);
  res.cookie("lname", req.body.lname);
  res.cookie("pass", req.body.pass);
  res.redirect("/admin");
});
app.get("/admin", (req, res) => {
  res.clearCookie("lname"); //as we are clearing after getting redirected
  // then it will first display the lname then refresh then it will get removed
  res.write("Welcome " + req.cookies.fname + "\n");
  res.write("Lname : " + req.cookies.lname + "\n");
  res.write("Your password : " + req.cookies.pass);
  res.end();
});
app.listen(5005);
