/*
You have been assigned to develop a user feedback form for a website using express and cookies.
Implement  the following requirements:
create a form with the following fields: name,email,message,ratings(radio buttons for bad,average,good,very good,excellent)
when the user submits the form, store their feedback information(name,email,message,rating) in cookie named feedback that expires
in 10 seconds. Display a confirmation message to the user after successfully submitting the form. And create a link to display
the feedback details stored in the feedback cookie.When the user click on the link retrive feedback information from the cookie
and display it on the page. The page also includes a link to logout.When the user clicks logout, the user redirected to homepage.
*/
var expr = require("express");
var app = expr();
var cp = require("cookie-parser");
app.use(cp());
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
app.post("/next", (req, res) => {
  var feedbackCookie = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    rating: req.body.r1,
  };
  res.cookie("feedback", JSON.stringify(feedbackCookie), { maxAge: 10000 });
  res.write("<h1>Cookies sent successfully!</h1>");
  res.write("<a href='display' >Click here to display details </a>");
  res.end();
});
app.get("/display", (req, res) => {
  let cookies = JSON.parse(req.cookies.feedback);
  res.write("<p>User Details: " + JSON.stringify(cookies) + "</p>");
  res.write("<a href ='/'>Click here to logout</a>");
  res.end();
});
app.listen(4080);
