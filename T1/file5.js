var fs = require("fs");
// fs.mkdirSync("Dictionary");
fs.writeFileSync("Dictionary/x1.txt", "10 5 15");
let r = fs.readFileSync("Dictionary/x1.txt", "utf8");
console.log(r);
r = r.split(" ");
var sum = 0;
var i = 0;
for (i = 0; i < r.length; i++) {
  sum += parseInt(r);
}
fs.writeFileSync("Dictionary/x2.txt", sum.toString());
