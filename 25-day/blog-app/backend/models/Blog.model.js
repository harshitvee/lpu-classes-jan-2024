const mongoose = require("mongoose");

// title
// completed

// schema
const BlogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

const blogModel = mongoose.model("Blog", BlogSchema); // blogs

// blogModel is responsible for everything.

module.exports = blogModel;
