let http = require("http");
let port = 3000;
let server = http.createServer((request, response) => {
  response.end("Hello");
});
server.listen(port, () => {
  console.log("server is ready: http://localhost:" + port + "/");
});
