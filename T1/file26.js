const ee = require("events");
const e = new ee();
e.on("start", () => {
  console.log("Started");
});
e.emit("start");
e.addListener("end", (a, b) => {
  console.log(`multiplication ${a * b}`);
});
e.emit("end", 10, 2);
