import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true, default:'https://fontawesome.com/v5/icons/user?f=classic&s=solid' },
    role: {
      type: String,
      enum: ["devadmin", "eventadmin", "participant"],
      default: "participant",
    },
    eventsParticipatd: { type: Array, default: [] },
    eventsOrganized: { type: Array, default: [] },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
