const expr = require("express");
const router = expr.Router();
const data = [
  { id: 101, name: "Amit", branch: "CSE" },
  { id: 102, name: "Rahul", branch: "IT" },
  { id: 103, name: "Saurabh", branch: "CSE" },
  { id: 104, name: "Sahil", branch: "IT" },
  { id: 105, name: "Hitesh", branch: "CST" },
  { id: 106, name: "Ansh", branch: "CST" },
];
router.get("/", (req, res) => {
  res.set("content-type", "text/html");
  for (i of data) {
    res.write(`<h1>Id: ${i.id} Name: ${i.name} Branch: ${i.branch}</h1><br>`);
  }
  res.send();
});
router.get("/:id", (req, res) => {
  var current_data = data.filter((i) => i.id == req.params.id);
  if (current_data.length >= 1) {
    res.send(current_data);
  } else {
    res.send("Data Not Found");
  }
});
router.get("/:branch", (req, res) => {
  var current_data = data.filter((i) => i.branch == req.params.branch);
  if (current_data.length >= 1) {
    res.send(current_data);
  } else {
    res.send("Data Not Found");
  }
});
module.exports = router;
