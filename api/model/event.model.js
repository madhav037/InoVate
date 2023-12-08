import mongoose from "mongoose";
import Team from "./team.model";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    description: { type: String, required: true },

    startingDate: { type: Date, required: true },

    endingDate: { type: Date, required: true },

    location: { type: String, required: true },

    totalParticipants: { type: Number, required: true, default: 0 },

    image: [{ type: String, required: true }],

    resgestrationOpen: { type: Boolean, required: true, default: true },

    registrationStartDate: { type: Date, required: true },

    registrationEndDate: { type: Date, required: true },

    teams: [{ ref: Team }],

    comments: { type: Array, default: [] },

    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
