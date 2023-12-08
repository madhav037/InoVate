import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { verifyAdmin } from '../utils/verifyAdmin.js';
import { createEvent } from '../controllers/event.controller.js';
const router = express.Router();

router.post("/create-event", verifyToken, verifyAdmin, createEvent)

export default router;