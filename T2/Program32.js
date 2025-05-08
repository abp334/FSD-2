// write express js to load student form using pug file which contains following fields
// name,email and course (CE,IT,CSE) once form submitted then data must be displayed on data page using pug file
// data should be submitted from express application to pug file
var expr = require("express");
var app = expr();
app.use(expr.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render(__dirname + "/pugfile");
});
app.post("/next", (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    course: req.body.r1,
  };
  res.render(__dirname + "/pugfiletemp", data);
});
app.listen(6090);
