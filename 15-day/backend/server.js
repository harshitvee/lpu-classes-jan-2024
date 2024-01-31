// local dev
// server : localhost
// client : localhost

const http = require("http");

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  if (req.url === "/api/todos" && req.method === "GET") {
    res.end(
      `<h1 style ="font-family:sans-serif ; background: black; color : white">Todos .....</h1>`
    );
  } else {
    res.end("<h1>Error .....</h1>");
  }
});

// server render

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
