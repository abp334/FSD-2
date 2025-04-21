const expr = require("express");
const app = expr();
student = { name: "LJU", age: 28 };
app.get("/", (req, res) => {
  res.write(JSON.stringify(student)); //stringify the object as direct passing the object in write() gives error
  res.end();
  // Can also use res.json(student) or res.send(student)
});
app.listen(6007);
