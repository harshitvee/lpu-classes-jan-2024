const express = require("express");
const {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controllers");
const router = express.Router();
router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getSingleTodo).patch(updateTodo).delete(deleteTodo);
module.exports = router;
