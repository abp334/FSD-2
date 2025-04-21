// write an express js to define one json object having student name and marks as a member.
// if user requests for name page, display only name on browser.
// if user requests for marks page, display only marks on browser.
// Display value in h2 tag with red color.
const express = require("express");
const app = express();
student = { name: "Hitesh", marks: 0 };
app.get("/name", (req, res) => {
  res.send(`<h1 style="color:red">${student.name}</h1>`);
});
app.get("/marks", (req, res) => {
  res.send(`<h1 style="color:red">${student.marks}</h1>`);
});
app.listen(3003);
