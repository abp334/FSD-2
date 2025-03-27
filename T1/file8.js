var fs = require("fs");
fs.writeFileSync("nodejs/test.txt", "hello");
console.log("Sync write operation completed");
console.log("outside");
fs.writeFile("nodejs/test1.txt", "world", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Async operation completed");
  }
});
console.log("outside"); // This will be shown before the result of above async operation as while the async operation is processing,
// this will get print before the output above
fs.appendFile("nodejs/test1.txt", "\nGood Morning", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appended");
  }
});
fs.readFile("nodejs/test1.txt", "utf8", (readerr, data) => {
  if (readerr) {
    console.log(readerr);
  } else {
    console.log(data);
  }
});
fs.rename("nodejs/test1.txt", "nodejs/test2.txt", () => {
  console.log("Renamed");
});
fs.unlink("nodejs/test2.txt", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Deleted");
  }
});
console.log("ended");
