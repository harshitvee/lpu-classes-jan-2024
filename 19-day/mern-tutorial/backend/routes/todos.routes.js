const express = require("express");
const {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controllers");
const router = express.Router();

// think of endpoints
// baseurl/api/v1/todos : GET,  POST
// baseurl/api/v1/todos/:id : GET , PATCH, DELETE

// in this file
// / : GET,  POST
// /:id : GET , PATCH, DELETE

router.route("/").get(getAllTodos).post(createTodo);

router.route("/:id").get(getSingleTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
