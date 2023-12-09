import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../controllers/event.controller.js";
const router = express.Router();

router.post("/create-event", createEvent);
router.get("/get-all-events", getAllEvents);
router.get("/get-event/:id", getEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);

export default router;
