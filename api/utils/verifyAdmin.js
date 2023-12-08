import express from 'express'
import User from '../model/user.model.js'
import { errorHandler } from './error.js'

export const verifyAdmin = async (req,res,next) => {
    const user = req.user
    const userData = await User.findById(user.id).lean()
    if (userData.role != 'eventadmin') {
       return next(errorHandler(403, 'forbidden error - not an admin'))
    }else {
        next();
    }
}