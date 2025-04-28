// write express js to perform following task
// create one html file which contains one text field for name,email field and checkbox for subscription. The html file will be loaded on homepage.
// email and name are required fields. on login page welcome user and email id should be printed. If user checks the subscription, then thank you for
// subscription message will be printed and logout link will be displayed under the message. If user clicks logout link, then it will be redirected to
// the homepage. If user has not opted for subscription then you can subscribe to get daily updates message will be printed and subscribe link will
// be displayed under the message. If user clicks subscribe link then it will be redirected to the subscription page.
var expr = require("express");
var app = expr();
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
let c1 = (req, res, next) => {
  res.write("<h1>Welcome " + req.body.fname + "</h1>");
  res.write("<h3>Your email is: " + req.body.email + "</h3>");
  if (req.body.check == "yes") {
    res.write("<p>Thank you for subscription</p>");
    res.write(`<a href="/">Logout</a>`);
  } else {
    next();
  }
  res.end();
};
let c2 = (req, res, next) => {
  res.write("<p>Subscribe to get daily updates</p>");
  res.write(`<a href="/subscribe">Subscribe Now</a>`);
  res.end();
};
app.use("/login", c1, c2);
app.listen(4005);
