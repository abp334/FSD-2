// write express js to load an html file having username and password and submit button. On clicking on submit button it should jump on checkpage
// using post method. If usrname is admin then jump to next middleware to print welcome admin. If username is not admin then stay on same middleware
// to print warning message in red color.
var expr = require("express");
var app = expr();
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
var c1 = (req, res, next) => {
  if (req.body.fname == "admin") {
    next();
  } else {
    res.write("<h1 style='color:red'>Please login with admin name</h1>");
  }
  res.end();
};
var c2 = (req, res, next) => {
  res.write("<h1>Welcome Admin</h1>");
  res.end();
  next();
};
app.use("/checkpage", c1, c2);
app.listen(6005);
