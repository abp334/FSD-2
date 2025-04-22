const expr = require("express");
const app = expr();
const path = require("path");
const staticPath = path.join(__dirname, "../Frontend");
app.use(expr.static(staticPath));
app.get("/home", (req, res) => {
  res.sendFile(staticPath + "/xyz.html");
});
app.listen(4000);
//JS->Backend->EXPR->Frontend->xyz.html
