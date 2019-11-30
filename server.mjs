import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./routes/auth.mjs";
import postsRoute from "./routes/posts.mjs";

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(3000, console.log("Server Up and Running"));
