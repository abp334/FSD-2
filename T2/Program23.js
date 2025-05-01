/*
Cookie -> Live on -> Client side(on user's browser)
To install : npm install cookie-parser
create a cookie : res.cookie("name","xyz")
read a cookie : const cookies = req.cookies
delete a cookie : res.clearCookie("name")
*/
var expr = require("express");
var app = expr();
var cp = require("cookie-parser");
app.use(cp());
app.get("/cookie", (req, res) => {
  res.cookie("name", "LJU");
  res.cookie("fname", "xyz");
  res.cookie("lname", "pqr");
  res.cookie("ID", "2", { expires: new Date(Date.now() + 10000) });
  res.cookie("email", "xyz@email.com", { maxAge: 10000 });
  res.clearCookie("fname");
  const cookies = req.cookies;
  res.send(cookies);
});
app.listen(6012);
