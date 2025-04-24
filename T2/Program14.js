const expr = require("express");
const app = expr();
element = {
  name: [
    {
      fruit: "mango",
    },
    {
      flower: "lily",
    },
    {
      pet: "dog",
    },
  ],
};
app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.write("<ol>");
  element.name.forEach((obj, index) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (i = 0; i < values.length; i++) {
      res.write(`<li>${values[i]}</li>`);
    }
  });
  res.write("</ol>");
  res.end();
});
app.listen(3000);
