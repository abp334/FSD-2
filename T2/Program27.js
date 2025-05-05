/* 
write a script to meet the following requirements:
create index.html file which contains form,username, password,login button. After clicking submit button, it should jump on save page store username and
password in session after saving redirecto to fetch page and read value put a logout link here jump on the delete session page after clicking logout
button destroy the session on this page and redirect to index.html page
*/
const expr = require("express");
const app = expr();
const sess = require("express-session");
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
app.use(
  sess({
    secret: "LJU123",
    cookie: { maxAge: 10000 },
  })
);
app.post("/save", (req, res) => {
  username = req.body.username;
  password = req.body.password;
  req.session.username = username;
  req.session.password = password;
  res.redirect("/fetch");
});
app.get("/fetch", (req, res) => {
  res.send(
    "<h1>Hello " +
      req.session.username +
      " your password is: " +
      req.session.password +
      "</h1><br><a href='/delete'>Logout</a>"
  );
});
app.get("/delete", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
app.listen(4008);
