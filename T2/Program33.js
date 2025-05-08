/* 
Multer -> middleware -> uploading files
npm install multer
Properties:
req.file
fieldname
original name
encoding
mimetype
size
destination
filename
path
*/
const expr = require("express");
const multer = require("multer");
const app = expr();
app.use(expr.static(__dirname));
let store = multer.diskStorage({
  destination: "single",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: store,
});

app.post("/upload", upload.single("mypic"), (req, res) => {
  const file = req.file;
  if (file) {
    res.send(
      `<h1>${file.originalname}</h1><h2>File Stored in ${file.destination}</h2>`
    );
  }
});

app.listen(2020);
