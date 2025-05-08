// Write express js to upload a file of 1 MB to a specific directory named data on the server and in this folder file must be stored in format of lju-file.pdf where lju is the field name.
const expr = require("express");
const multer = require("multer");
const app = expr();

app.use(expr.static(__dirname, { index: "m.html" }));
app.use(expr.urlencoded({ extended: false }));
let store = multer.diskStorage({
  destination: "data",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + "file" + ".pdf");
  },
});

let upload = multer({ storage: store, limits: { fileSize: 1024 * 1024 } });

app.post("/upload", upload.single("lju"), (req, res) => {
  const file = req.file;
  if (file) {
    res.set("content-type", "text/html");
    res.send(
      `<h1>${file.originalname}</h1><h2>File Stored in ${file.destination}</h2>`
    );
  }
});
app.listen(2021);
