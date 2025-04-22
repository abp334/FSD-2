const expr = require("express");
const app = expr();
const path = require("path");
const staticPath = path.join(__dirname, "../Frontend"); //__dirname gives Backend , .. goes to EXPR and ../Frontend means EXPR->Frontend
app.use(expr.static(staticPath));
app.listen(5202);
//When the js file is in one directory and html file in other, this is used to join the path
//Here JS is in Backend which is in EXPR and HTML is in Frontend which is in EXPR
//JS->Backend->EXPR->Frontend->index.html
