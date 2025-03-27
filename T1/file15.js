let http = require("http");
// http.createServer( (req,res)=>{
//     res.write("Hello")
//     res.end();
// }).listen(3120)

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(" <h1> Hello </h1>");
    res.end();
  })
  .listen(3120);
