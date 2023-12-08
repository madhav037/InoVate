import User from "../model/user.model.js";
import { errorHandler } from "./error.js";

export const verifyAuth = async (req,res,next) => {
    const userId = req.params.userId
    // console.log(user)
    const userData = await User.findById(userId).lean()
    // const userData = false
    if (userData.authenticated != true) {
       return next(errorHandler(403, 'forbidden error - not an authenticated user'))
    }else {
        next();
    }
}