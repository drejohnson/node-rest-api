import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 64
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 120
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model("user", userSchema);
