let path = require("path");
p = path.dirname("D:/D1_8/nodejs");
console.log(p);

p1 = path.basename("D:/D1_8/nodejs/file.js");
console.log(p1);

p2 = path.extname("D:/D1_8/nodejs/file.js");
console.log(p2);

p3 = path.parse("D:/D1_8/nodejs/file.js");
console.log(p3);
