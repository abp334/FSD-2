// write a node js script that asynchronously write data to file name test1.js if no error occurs during writting process
// the script should then append additional data to the same file and finally it should read the content of the file including the
// newly written and appended data and display it on console
let fs = require("fs");
fs.writeFile("nodejs/test.txt", "Data", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile("nodejs/test.txt", "\nAdditional Data", (err) => {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("nodejs/test.txt", "utf8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
