var fs = require("fs");
fs.writeFile("nodejs/test.txt", "hello", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile("nodejs/test.txt", "good morning", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
setTimeout(function () {
  fs.readFile("nodejs/test.txt", "utf8", (readerr, data) => {
    if (readerr) {
      console.log(readerr);
    } else {
      console.log(data);
    }
  });
}, 2000);
