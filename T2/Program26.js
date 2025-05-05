/* 
Session
npm install express-session

*/
const expr = require("express");
const app = expr();
const sess = require("express-session");
app.use(
  sess({
    secret: "LJU123",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 10000 },
  })
);
app.get("/", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(req.session.page_views);
  } else {
    req.session.page_views = 1;
    res.send("Welcome");
  }
});
app.listen(6028);
