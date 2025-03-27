// write nodejs script and json to perform the below task.
// 1) Write below object in text file s2.txt
/* 2) Read data from the same file and perform the below task the below task 
        i) addition of a and b
        ii) subtraction of second element of c and b (must be a positive value).
        iii) multiplication of elements of c.
        iv)add the output of addition subtraction and multiplication in s2.txt file.
        
 */
const obj = {
  d: { a: 10, b: 20, c: [30, 10] },
};
let fs = require("fs");
fs.writeFile("nodejs/s2.txt", JSON.stringify(obj), (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("nodejs/s2.txt", "utf8", (readerr, data) => {
      if (readerr) {
        console.log(readerr);
      } else {
        let data2 = JSON.parse(data);
        let add = data2.d.a + data2.d.b;
        let sub = Math.abs(data2.d.c[1] - data2.d.b);
        let mul = data2.d.c[0] * data2.d.c[1];
        fs.appendFile("nodejs/s2.txt", `${add} ${sub} ${mul}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
});
