import express from "express";
import verify from "../middleware/verifyToken.mjs";
import Post from "../model/Post.mjs";

const router = express.Router();

// Get Posts
router.get("/", verify, async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add Post
router.post("/", verify, async (req, res) => {
  const { title, description } = req.body;

  try {
    const post = new Post({
      title,
      description
    });
    const newPost = await post.save();
    res.send({
      _id: newPost._id,
      title: newPost.title,
      description: newPost.description
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Post By ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removedPost = await Post.deleteOne({ _id: id });
    res.send(removedPost);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update Post
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await Post.updateOne(
      { _id: id },
      {
        $set: {
          ...req.body
        }
      }
    );
    res.send(updatedPost);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
