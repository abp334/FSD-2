/*
Middleware
*/
var expr = require("express");
var app = expr();
const cb = (req, res, next) => {
  console.log("Initialized");
  res.set("content-type", "text/html");
  res.write("<strong>First</strong>");
  next();
};
const cb1 = (req, res, next) => {
  res.write("<p>Addition" + (5 + 5) + "</p>");
  next();
};
app.use("/ee", cb, cb1);
app.get("/ee", (req, res) => {
  res.write("<h1>Welcome to LJU</h1>");
  res.send();
});
app.listen(6001);
