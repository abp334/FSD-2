const ee = require("events");
const e = new ee();
var listener1 = function listen() {
  console.log("listener 1 executed");
};
var listener2 = function listen() {
  console.log("listener 2 executed");
};
e.on("conn", listener1);
e.on("conn", listener2);
let count = e.listenerCount("conn");
console.log("Count1 =" + count);
e.emit("conn");
e.removeListener("conn", listener1);
count = e.listenerCount("conn");
console.log("Count2 =" + count);
e.emit("conn");
