const expr = require("express");
const app = expr();
app.get("/", (req, res) => {
  res.set("content-type", "text/plain");
  res.send("<h2>Hello</h2>");
});
app.get("/about", (req, res) => {
  res.set("content-type", "text/html");
  res.write("Hello");
  res.send(); //if you use write() then the send() should be empty
});
app.listen(3001);
console.log("server started");
