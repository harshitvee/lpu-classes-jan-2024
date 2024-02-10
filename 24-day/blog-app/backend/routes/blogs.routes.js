const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs.controllers");
const router = express.Router();
router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getSingleBlog).patch(updateBlog).delete(deleteBlog);
module.exports = router;
