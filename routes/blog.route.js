const express = require("express");
const router = express.Router();

const {
  getPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
  getPostsJson,
} = require("../controllers/blog.controller");

router.get("/", getPosts);
router.get("/:id", getOnePost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
