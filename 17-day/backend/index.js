const express = require("express");
const todos = require("./db.json");
const fs = require("fs");
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
  if (!("title" in req.body)) {
    res.status(400).json({ message: "title is missing" });
  } else if (!("completed" in req.body)) {
    res.status(400).json({ message: "comleted is missing" });
  } else {
    const id = todos.length + 1;
    const newTodo = {
      id: id.toString(),
      title: req.body.title,
      completed: req.body.completed,
    };
    todos.push(newTodo);
    fs.writeFile("db.json", JSON.stringify(todos), "utf-8", (err) => {
      if (err) {
        res.status(500).json({ message: "internal server error" });
      } else {
        res.status(200).json(newTodo);
      }
    });
  }
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
