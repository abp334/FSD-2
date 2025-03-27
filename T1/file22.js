// create http webpages where admin page displays sufficient memory in bold blue color with font size 24px along with available memory
// in MB and font size 32 px and red color. If available system memory is greater then 1 gb else it shows not sufficient memory
// in simple Text. For any other page requested show you are not admin.
let http = require("http");
let url = require("url");
let os = require("os");
http
  .createServer(function (req, res) {
    if (req.url == "/admin") {
      res.writeHead(200, { "content-type": "text/html" });
      let memory = os.freemem();
      let mb = memory / 1024 / 1024;
      let gb = mb / 1024;
      if (gb > 1) {
        res.write(
          `<p style = 'font-size:24px;color:blue;'>Sufficient Memory</p>`
        );
        res.write(
          `<p style = 'font-size:32px;color:red;'>Available Memory: ${mb} MB</p>`
        );
      } else {
        res.write("<p>Not Sufficient Memory</p>");
      }
    } else {
      res.write("You are not admin !");
    }
    res.end();
  })
  .listen(3002);
