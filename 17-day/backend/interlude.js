const todos = [
  {
    id: "1",
    title: "learn nodejs",
    completed: false,
  },
  {
    id: "2",
    title: "learn express",
    completed: false,
  },
  {
    id: "3",
    title: "Book tickets",
    completed: true,
  },
];

// find todo with id 3

const todo = todos.find((todo) => {
  return todo.id === "4";
});
console.log(todo);
