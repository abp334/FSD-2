// write a node js script to copy contents of one file to another file. Data should be fetch from source.txt and insert to
// destination.txt. Print data on console from destination.txt
var fs = require("fs");
fs.mkdirSync("Files");
var path = "Files/source.txt";
var path2 = "Files/destination.txt";
let data = fs.readFileSync(path, "utf8");
fs.writeFileSync(path2, data);
console.log(fs.readFileSync(path2, "utf8"));
fs.unlinkSync(path);
fs.unlinkSync(path2);
fs.rmdirSync("Files");
