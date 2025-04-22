const expr = require("express");
const app = expr();
const path = require("path");
app.use(expr.static("Frontend", { index: "xyz.html" })); //EXPR->Frontend->xyz.html
app.listen(3005);
