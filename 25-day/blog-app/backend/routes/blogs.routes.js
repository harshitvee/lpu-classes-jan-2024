const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getMyBlogs,
} = require("../controllers/blogs.controllers");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router(requireAuth);
router.route("/").get(getAllBlogs);

router.use(requireAuth);

router.route("/my-blogs").get(getMyBlogs);
router.route("/").post(createBlog);
router.route("/:id").get(getSingleBlog).patch(updateBlog).delete(deleteBlog);
module.exports = router;
