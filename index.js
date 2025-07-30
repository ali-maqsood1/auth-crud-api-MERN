// all packages: npm i express bcryptjs cookie-parser cors helmet
//joi jsonwebtoken mongoose nodemailer
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js"
import postsRouter from "./routes/postsRouter.js";

dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database connected!");
})
.catch((err) => {
    console.log(`Error connecting to Databse: ${err}`);
})


app.get('/', (req, res) => {
    res.json({message: "Hello from the server"});
});

app.use('/api/auth',authRouter);
app.use('/api/posts',postsRouter)


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})