let exp = require("express");
let app = exp();
let multer = require("multer");
app.use(exp.static(__dirname, { index: "m.html" }));

let storage = multer.diskStorage({
  destination: "multiple",
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now() + ".docx");
  },
});
let upload = multer({ storage: storage });

app.post("/upload", upload.array("mypic", 5), (req, res) => {
  let file = req.files;
  if (file) {
    res.set("content-type", "text/html");
    for (i of file) {
      res.write("<h1>File Name: " + i.originalname + "has been uploaded </h1>");
    }
    res.send();
  }
});
app.listen(6052);
