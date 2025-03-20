// write nodejs to read data from file and arrange in ascending order and print it on console
let fs = require("fs");
fs.writeFileSync("nodejs/num.txt", "50 -1 99 100 20 0 56 78 59");
let data = fs
  .readFileSync("nodejs/num.txt", "utf8")
  .split(" ")
  .sort((a, b) => a - b);
console.log(data);
