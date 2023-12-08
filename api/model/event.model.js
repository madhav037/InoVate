import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startingDate: { type: Date, required: true },
    endingDate: { type: Date, required: true },
    location: { type: String, required: true },
    totalParticipants: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    status: { type: String, required: true },
    participants: { type: Array, default: [] },
    comments: { type: Array, default: [] },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
