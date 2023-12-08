import bcrypt from 'bcryptjs';
import User from '../model/user.model.js'

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body
    const hashedPassword = bcrypt.hashSync(password,10);
    const newUser = new User({username, email, password : hashedPassword})
    try {
        await newUser.save();
        res.status(201).json('user Created SuccessFully')
    } catch (err) {
        next(err);
    }   
}

