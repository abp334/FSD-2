const expr = require("express");
const app = expr();
app.use(expr.static("Frontend"));
app.listen(5001);
//when HTML file is in another directory like in this the HTML file is in Frontend which is in EXPR.
