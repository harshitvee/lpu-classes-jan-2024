const BlogModel = require("../models/Blog.model");

async function getAllBlogs(req, res) {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json("something went wrong");
  }
}

async function getMyBlogs(req, res) {
  const user_id = req.user._id;
  try {
    const myBlogs = await BlogModel.find({ user_id });
    res.json(myBlogs);
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function createBlog(req, res) {
  try {
    // document : row
    req.body.user_id = req.user._id;
    const blog = await BlogModel.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function getSingleBlog(req, res) {
  const id = req.params.id;
  try {
    const blog = await BlogModel.findOne({ _id: id });
    // blank
    if (!blog) {
      res.status(404).json(`No blog with id ${id}`);
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function updateBlog(req, res) {
  // req -->
  const id = req.params.id;
  try {
    const blog = await BlogModel.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json(`No blog with id ${id}`);
    }

    if (blog.user_id == req.user._id) {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      return res.json(updatedBlog);
    } else {
      return res
        .status(401)
        .json({ error: "You are not authorized  to do this" });
    }

    // blog
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function deleteBlog(req, res) {
  const id = req.params.id;
  try {
    const blog = await BlogModel.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json(`No blog with id ${id}`);
    }
    if (blog.user_id == req.user._id) {
      const deletedBlog = await BlogModel.findOneAndDelete({ _id: id });
      res.status(200).json(deletedBlog);
    } else {
      return res
        .status(401)
        .json({ error: "You are not authorized  to do this" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getMyBlogs,
};
