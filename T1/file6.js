// write nodejs script to write an array of object with properties name and age in file named MediaStreamAudioDestinationNode.txt then
// read the file and display object on console
const student = [
  {
    name: "ABC",
    age: 30,
  },
  {
    name: "XYZ",
    age: 29,
  },
];
var fs = require("fs");
fs.writeFileSync("nodejs/Student.txt", JSON.stringify(student));
data = fs.readFileSync("nodejs/Student.txt", "utf8");
b = JSON.parse(data);
console.log(b);
