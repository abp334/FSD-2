// write json object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value
// and diameter value respectively. Write object as well as perimeter value  of square and circle in shape.txt file
const shape = [
  {
    name: "circle",
    diameter: 8,
  },
  {
    name: "square",
    side: 10,
  },
];
let fs = require("fs");
fs.writeFileSync("nodejs/shape.txt", JSON.stringify(shape));
let ob = JSON.parse(fs.readFileSync("nodejs/shape.txt", "utf8"));
let periC;
let periS;
ob.forEach((element) => {
  if (element.name == "circle") {
    periC = 3.14 * element.diameter;
  } else if (element.name == "square") {
    periS = 4 * element.side;
  }
});
fs.appendFileSync(
  "nodejs/shape.txt",
  `\n perimeter of circle = ${periC} perimeter of square = ${periS}`
);
let data = fs.readFileSync("nodejs/shape.txt", "utf8");
console.log(data);
