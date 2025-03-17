const Blog = require("../models/blog.model");

const getPosts = async (req, res) => {
  try {
    const posts = await Blog.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Blog.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Blog.create(req.body);
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Blog.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
};
