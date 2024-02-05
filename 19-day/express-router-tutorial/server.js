const express = require("express");
const app = express();
const guitarsRouter = require("./routes/guitars.routes");
const port = 8000;
app.get("/", (req, res) => {
  res.json("Hello from / route");
});

app.use("/guitars", guitarsRouter);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
