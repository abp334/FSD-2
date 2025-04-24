/* 
For POST method another middleware function is used 
express.urlencoded()
in urlencoded , there is a value passed
urlencoded({extended:false})
false is querystring library and true is qs library which is default and deprecated
Also app.post is used
*/
var expr = require("express");
var app = expr();
app.use(expr.urlencoded({ extended: false }));
app.use(expr.static(__dirname, { index: "form.html" }));
app.post("/process", (req, res) => {
  console.log(req.body.fname);
  res.send(req.body);
});
app.listen(6004);
