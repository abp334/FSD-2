// write a nodejs script to handle following events
// 1) check if the radius is negative or not
// if negative, then display message "radius must be positive" else calculate the perimeter of circle.
// 2) check side is negative or not if negative then display message "side must be positive"
// else calculate the perimeter of square
let ee = require("events");
let e = new ee();
let findVal = function (r, s) {
  if (r < 0) {
    e.emit("negradius");
  } else {
    console.log("Perimeter of circle =" + 2 * Math.PI * r);
  }
  if (s < 0) {
    e.emit("negside");
  } else {
    console.log("Perimeter of square =" + 4 * s);
  }
};
e.on("negradius", () => {
  console.log("radius must be positive");
});
e.on("negside", () => {
  console.log("side must be positive");
});
