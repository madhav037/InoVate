import e from "express";
import User from "../model/user.model.js";

export const updateAuthStatus = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { authenticated: true }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
            next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

export const updateRoleToAdmin = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { role: 'eventadmin' }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
            next(error)
    }
}

export const updateRoleToParticipant = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { role: 'participant' }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
            next(error)
    }
}

export const getUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    const { userId } = req.params.userId;
    const { username, email, password, role, authenticated, image, eventsParticipatd, eventsOrganized } = req.body;
    
    try {
        const user = new User.findByIdAndUpdate(userId, {
            username,
            email,
            password,
            role,
            authenticated,
            image,
            eventsParticipatd,
            eventsOrganized
        }, { new: true })
        if (!user) return res.status(404).json({ message: "User not found" })
        res.status(200).json(user)
    } catch (error) {
        next(error)
    } 
}

export const deleteUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(userId)
        if (!deletedUser) return res.status(404).json({ message: "User not found" })
        res.status(200).json(deletedUser)
    } catch (error) {
        next(error)
    }
}