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
    res.status(400).json("something went wrong");
  }
}
async function getSingleTodo(req, res) {
  const id = req.params.id;
  res.json(`Get : ${id}`);
}
async function updateTodo(req, res) {
  const id = req.params.id;
  res.json(`Patch : ${id}`);
}
async function deleteTodo(req, res) {
  const id = req.params.id;
  res.json(`Delete : ${id}`);
}
module.exports = {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
