const express = require("express");
const cors = require("cors");
require("dotenv").config();
const blogsRouter = require("./routes/blogs.routes");
const usersRouter = require("./routes/users.routes");
const { connectDB } = require("./db/connect");
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/blogs", blogsRouter);
app.use("/api/v1/user", usersRouter);

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
