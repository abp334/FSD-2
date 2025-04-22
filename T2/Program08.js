/*
Link HTML,CSS,JS
1)app.use(path,callback)
path - for which middleware function is called
callback- to call series of middleware function
express.static(root,[options]) //The middleware function which is already available
2)path.join() //if file is available in different folders than this is called to join the path
*/
const expr = require("express");
const app = expr();
app.use(expr.static(__dirname));
app.listen(5200);
//EXPR->index.html
