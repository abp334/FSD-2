const expr = require("express");
const app = expr();
const path = require("path");
css_path = path.join(__dirname, "../CSS");
html_path = path.join(__dirname, "../HTML");
img_path = path.join(__dirname, "../IMAGE");
app.use(expr.static(css_path));
app.use(expr.static(img_path));
app.use(expr.static(html_path));
app.listen(2005);
//The css and img path joins the css and img file with html file and in the original html file you just have to mention
// the file name and not whole path. If you do not do this then the image and css file will not load
//css file is in css folder,html in html folder,js in js folder and img in img folder.
