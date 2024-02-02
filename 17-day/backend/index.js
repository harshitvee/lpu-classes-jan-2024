const express = require("express");
const todos = require("./db.json");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

// get all todos
app.get("/api/v1/todos", (req, res) => {
  res.json(todos);
});

// get single todo
app.get("/api/v1/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: `There is no todo with id ${id}` });
  }
});

// create todo
app.post("/api/v1/todos", (req, res) => {
  console.log(req.body);
  res.json({ message: "trying to create todo ? " });
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
