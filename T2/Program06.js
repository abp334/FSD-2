// write an express js to define one json array of 3 object having properties name and age.
// sort this object according to age if user requests sortedNames in url then all names along with age should be displayed according
// to descending order of age. Also display these values on sortPage and display json object on home page.
const express = require("express");
const app = express();
student = [
  {
    name: "abc",
    age: 28,
  },
  {
    name: "def",
    age: 40,
  },
  {
    name: "xyz",
    age: 50,
  },
];
app.get("/home", (req, res) => {
  res.send(student);
});
app.get("/sort", (req, res) => {
  let sortedArr = student.sort((a, b) => b.age - a.age);
  for (i = 0; i < sortedArr.length; i++) {
    res.write(sortedArr[i].name + " = " + sortedArr[i].age + "\n");
  }
  res.end();
});
app.listen(3005);
