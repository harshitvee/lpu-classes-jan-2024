const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs.controllers");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router(requireAuth);
router.use(requireAuth);

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getSingleBlog).patch(updateBlog).delete(deleteBlog);
module.exports = router;
