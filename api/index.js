import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/auth.route.js";
import eventRouter from "./routes/event.route.js";
import userRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.listen(3000, () => {
  console.log("app listening on port 3000");
});

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://AayushGandhi:YPajUaTDpleeamPx@userinfo.b92p5dr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRouter);
app.use("/api/event", eventRouter)
app.use("/api/user", userRouter)
