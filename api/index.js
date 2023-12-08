import cookieParser from 'cookie-parser';
import express from 'express';
import authRouter from "./routes/auth.route.js";

const app = express();

app.listen(3000, () => {
    console.log('app listening on port 3000');
})

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter)