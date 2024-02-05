const mongoose = require("mongoose");

// title
// completed

// schema
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("Todo", TodoSchema); // todos

// todoModel is responsible for everything.

module.exports = todoModel;
