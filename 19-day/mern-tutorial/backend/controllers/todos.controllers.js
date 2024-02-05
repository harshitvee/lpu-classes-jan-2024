const TodoModel = require("../models/Todo.model");

async function getAllTodos(req, res) {
  try {
    const todos = await TodoModel.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json("something went wrong");
  }
}
async function createTodo(req, res) {
  try {
    // document : row
    const todo = await TodoModel.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function getSingleTodo(req, res) {
  const id = req.params.id;
  try {
    const todo = await TodoModel.findOne({ _id: id });
    // blank
    if (!todo) {
      res.status(404).json(`No todo with id ${id}`);
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function updateTodo(req, res) {
  const id = req.params.id;
  try {
    const todo = await TodoModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      res.status(404).json(`No todo with id ${id}`);
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function deleteTodo(req, res) {
  const id = req.params.id;
  try {
    const todo = await TodoModel.findOneAndDelete({ _id: id });
    if (!todo) {
      res.status(400).json(`No todo with id ${id}`);
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
