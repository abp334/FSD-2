// write express js to print message in next line by splitting by '.'.Use get method to submit the data
//HTML file contains form with text area for the message and submit button
var expr = require("express");
var app = expr();
app.use(expr.static(__dirname, { index: "form.html" }));
app.get("/process_get", (req, res) => {
  response = req.query.textArea;
  newResponse = response.split(".");
  res.set("content-type", "text/html");
  for (i = 0; i < newResponse.length; i++) {
    if (newResponse[i] != "") {
      res.write(newResponse[i] + "<br/>");
      console.log(newResponse[i]);
    }
  }
  res.end();
});
app.listen(1003);
