// write a script to meet following requirements:
// • Create session.html file page which contains form(username,password,login button). and open it on
// localhost.
// • After clicking submit button, it should jump on “save” page. Store username and password in
// session.
// • After saving session, redirect to “fetchdata” page and read value. On this page check authentication
// of user. User name and password must be “admin” and “admin@123” respectively.
// o If this condition is true then display welcome admin and display logout link on this
// page(fetchdata).
// ▪ By clicking on logout link user should jump to “destroy” page and destroy the session
// there and display the message “Session destroyed”.  And give the link of “login” under
// that message. By clicking that link user will be redirected to the home page.
// o Else display “Please enter valid username and password” and login link on this
// page(fetchdata).
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
  if (req.session.username == "admin" && req.session.password == "admin@123") {
    res.send("<h1>Welcome Admin </h1><br><a href='/delete'>Logout</a>");
  } else {
    res.send(
      "<h1>Please enter valid username and password</h1><br><a href='/'>Login</a>"
    );
  }
});
app.get("/delete", (req, res) => {
  req.session.destroy();
  res.send("<h1>Session Destroyed</h1><br><a href='/'>Login</a>");
});
app.listen(4010);
