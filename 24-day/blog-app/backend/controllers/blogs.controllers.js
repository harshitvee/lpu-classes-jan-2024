const BlogModel = require("../models/Blog.model");

async function getAllBlogs(req, res) {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json("something went wrong");
  }
}
async function createBlog(req, res) {
  try {
    // document : row
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
  const id = req.params.id;
  try {
    const blog = await BlogModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      res.status(404).json(`No blog with id ${id}`);
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function deleteBlog(req, res) {
  const id = req.params.id;
  try {
    const blog = await BlogModel.findOneAndDelete({ _id: id });
    if (!blog) {
      res.status(400).json(`No blog with id ${id}`);
    } else {
      res.status(200).json(blog);
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
};
