import app from "./api/server.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Up and Running on port: ${port}`));
