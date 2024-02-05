const express = require("express");
require("dotenv").config();
const todosRouter = require("./routes/todos.routes");
const { connectDB } = require("./db/connect");
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use("/api/v1/todos", todosRouter);

// db connect then app run

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
