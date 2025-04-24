var expr = require("express");
var app = expr();
app.use(expr.static(__dirname, { index: "form.html" }));
app.get("/process_get", (req, res) => {
  response = {
    fn: req.query.fname,
    ln: req.query.lname,
  };
  console.log(req.query);
  res.send(response);
});
app.listen(5004);
