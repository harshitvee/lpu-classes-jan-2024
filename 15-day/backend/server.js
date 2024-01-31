// local dev
// server : localhost
// client : localhost

const http = require("http");

const PORT = 8000;

// MERN

// NODE / express / mongodb -> rest apis

// json

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });
//   if (req.url === "/api/todos" && req.method === "GET") {
//     res.end(
//       `<h1 style ="font-family:sans-serif ; background: black; color : white">Todos .....</h1>`
//     );
//   } else {
//     res.end("<h1>Error .....</h1>");
//   }
// });

const todos = [
  {
    id: "1",
    title: "learn node js",
    completed: false,
  },
  {
    id: "2",
    title: "create video for codprog",
    completed: false,
  },
  {
    id: "3",
    title: "Reply emails",
    completed: false,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/api/todos" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(todos));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ message: "Not a valid url or method " }));
  }
});

// server render

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
