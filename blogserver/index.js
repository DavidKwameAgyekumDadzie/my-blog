// const config = require("dotenv");

// config();

require("dotenv").config();

const express = require("express");

const { dbConnect } = require("./src/modules/config/dbConnect");
const authRouter = require("./src/modules/users/auth.route");
const { postRouter } = require("./src/modules/posts/posts.route");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to David's Blog. Kindly use /post to get all posts",
  });
});

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ error: error.message || "Internal server error." });
});

const PORT = process.env.PORT || 4000;

const start = async () => {
  await dbConnect();

  app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
  });
};
start();
