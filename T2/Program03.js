const expr = require("express");
const app = expr();
app.get("/calender/:day/event/:ename", (req, res) => {
  res.send(req.params); //route parameter
  //   res.write(JSON.stringify(req.params));
  //   res.end(); //another way to write the json object as string
});
app.listen(6001, () => {
  console.log("server started");
});
