const EventEmitter = require("events");
var eventEmitter = new EventEmitter();
var fun1 = (msg) => {
  console.log("message from fun1" + msg);
};
var fun2 = (msg) => {
  console.log("message from fun2" + msg);
};
eventEmitter.on("myevent1", fun1);
eventEmitter.on("myevent1", fun2);
eventEmitter.on("myevent2", fun1);
eventEmitter.on("myevent2", fun2);
eventEmitter.removeListener("myevent2", fun2);
eventEmitter.removeAllListeners("myevent1");
eventEmitter.emit("myevent1", "lju");
eventEmitter.emit("myevent2", "LJ University");
