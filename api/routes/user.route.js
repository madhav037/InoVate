import express from 'express';
import { getAllUsers, updateAuthStatus, updateRoleToParticipant, updateRoleToAdmin, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyAuth } from '../utils/verifyAuthenticated.js';

const router = express.Router();

router.put('/update-auth-status/:userId', updateAuthStatus)
router.get('/get-all-users', getAllUsers)
router.put('/change-to-admin/:userId', verifyAuth, updateRoleToAdmin)
router.put('/change-to-participant/:userId', updateRoleToParticipant)
router.get('/get-user/:userId', getUser)
router.put('/update-user/:userId', updateUser)
router.delete('/delete-user/:userId', deleteUser)
export default router;