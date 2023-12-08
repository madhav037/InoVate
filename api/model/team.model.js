import mongoose from "mongoose";
import User from "./user.model.js";
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: User }],
  leader: { type: mongoose.Schema.Types.ObjectId, ref: User },
  description: { type: String },
  createdDate: { type: Date, default: Date.now },
});
const Team = mongoose.model("Team", teamSchema);
export default Team;
