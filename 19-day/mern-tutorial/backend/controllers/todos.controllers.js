function getAllTodos(req, res) {
  res.json("get all todos");
}

function createTodo(req, res) {
  res.json("creating todo...");
}

function getSingleTodo(req, res) {
  const id = req.params.id;
  res.json(`Get : ${id}`);
}

function updateTodo(req, res) {
  const id = req.params.id;
  res.json(`Patch : ${id}`);
}

function deleteTodo(req, res) {
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
