import express from "express";
import cors from "cors";
import helmet from "helmet";

import authRoute from "../routes/auth.mjs";
import postsRoute from "../routes/posts.mjs";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.use("/", (req, res) =>
  res.send(`
    <h2>Node REST API with Auth</h2>
  `)
);

export default app;
