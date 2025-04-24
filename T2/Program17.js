// write express js to perform following tasks:
// create one html file which contains two number type input fields, one dropdown which contains options like select,addition,subtraction,
// multiplication,division and one submit button.
// The input field must contain value greater than zero else it will give a message "please enter a valid number"
// also user must select any of the formula else give a message "you have not selected any formula".
// Message will be displayed on calc page.
// If one formula is selected and numbers are entered then respective calculations will be performed on calc page
//use get method to request data
var expr = require("express");
var app = expr();
app.use(expr.static(__dirname, { index: "form.html" }));
app.get("/calc", (req, res) => {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  res.set("content-type", "text/html");
  if ((n1 > 0) & (n2 > 0)) {
    if (req.query.selectgrp == "add") {
      sum = n1 + n2;
      res.write("<h1>Addition is:" + sum + "</h1>");
    } else if (req.query.selectgrp == "sub") {
      sum = n1 - n2;
      res.write("<h1>Subtraction is:" + sum + "</h1>");
    } else if (req.query.selectgrp == "mul") {
      sum = n1 * n2;
      res.write("<h1>Multiplication is:" + sum + "</h1>");
    } else if (req.query.selectgrp == "div") {
      sum = n1 / n2;
      res.write("<h1>Division is:" + sum + "</h1>");
    } else {
      res.write("<h1>You have not selected any formula</h1>");
    }
  } else {
    res.write("<h1>Please enter valid number</h1>");
  }
  res.end();
});
app.listen(3000);
