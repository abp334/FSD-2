// write nodejs to handle event of write data in File,append data in file and read data and display data
// in console
let fs = require("fs");
let event = require("events");
let e = new event();
e.on("datawrite", function () {
  fs.writeFile("nodejs/test.txt", "Hello", (err) => {
    if (err) {
      throw err;
    }
  });
  console.log("data written");
  e.emit("dataappend");
  e.emit("dataread");
});
e.on("dataappend", function () {
  fs.appendFile("nodejs/test.txt", "World", (err) => {
    if (err) {
      throw err;
    }
  });
});
e.on("dataread", function () {
  fs.readFile("nodejs/test.txt", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
});
e.emit("datawrite");
