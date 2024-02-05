const express = require("express");
require("dotenv").config();
const todosRouter = require("./routes/todos.routes");
const port = process.env.PORT || 8080;

const app = express();

app.use("/api/v1/todos", todosRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
