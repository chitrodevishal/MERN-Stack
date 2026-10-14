const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Vishal");
  } else if (req.url === "/contact") {
    res.end("Hello Contact");
  } else if (req.url === "/about") {
    res.end("Hello About");
  } else if (req.url === "/project") {
    res.end("projects");
  } else {
    res.end("Hello Error");
  }
});

server.listen(3000, () => {
  console.log("Hello world");
});
