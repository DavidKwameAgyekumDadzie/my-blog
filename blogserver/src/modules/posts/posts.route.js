const router = require("express").Router;
const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("./posts.controller");

const { authRequired } = require("../middlewares/authRequired");

const postRouter = router();

postRouter.route("/").get(getAllPosts).post(authRequired, createPost);
postRouter.route("/:postId").get(getSinglePost).patch(authRequired, updatePost);
delete (authRequired, deletePost);

module.exports = { postRouter };
