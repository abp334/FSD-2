// write express js to request server to display json object(array of objects) in table form on browser.
const expr = require("express");
const app = expr();
student = {
  u1: [
    {
      name: "LJU",
      id: 2,
    },
    {
      name: "LJU1",
      id: 3,
    },
    {
      name: "LJU2",
      id: 4,
    },
  ],
};
app.get("/student", (req, res) => {
  res.set("content-type", "text/html");
  res.write("<table border='1' rules='all'>");
  arr = student.u1;
  res.write("<tr><td><b>Name</b></td><td><b>ID</b></td><tr>");
  for (i = 0; i < arr.length; i++) {
    res.write("<tr>");
    res.write(`<td>${arr[i].name}</td><td>${arr[i].id}</td>`);
    res.write("</tr>");
  }
  res.end();
});
app.listen(3000);
