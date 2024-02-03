const express = require("express");

const app = express();
const port = 8001;

// understand middlwares

// create custom middlewares

// logfile
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
