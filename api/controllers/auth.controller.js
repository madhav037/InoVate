import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user Created SuccessFully");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "User not found!"));

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "wronf credentials!"));

    const token = jwt.sign(
      { id: validUser._id },
      "this12is!@a34very#$secret56key%^"
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("user logged out");
  } catch (err) {
    next(err);
  }
};
