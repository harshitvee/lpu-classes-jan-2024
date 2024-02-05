const express = require("express");
const app = express();
const guitarsRouter = require("./routes/guitars.routes");
const port = 8000;

app.use("/guitars", guitarsRouter);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
