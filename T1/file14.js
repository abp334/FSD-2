let url = require("url");

let add = "http://localhost:8080/default.html?year=2025&month=feb";

let q = url.parse(add, true); //false if you want string
console.log(q);

//write nodejs script to fetch query if year is leap year or not
// console.log(q.query.year)

// let year=q.query.year
// if( (year%4==0 && year%100!=0 )|| year%400==0){
//    console.log("Leap")
// }

//write nodejs script to print query string in file using ES6 Call back(Async File System)

let fs = require("fs");

fs.writeFile("nodejs/test.txt", `${q.query.year}`, (err) => {
  if (err) {
    throw err;
  }
});
