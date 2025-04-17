import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
//=========================================
import dbConnect from "./v1/config/db.js";
import router from "./v1/routes/index.js";
import {errorHandler, notFound} from "./v1/middleware/errorMiddleware.js"


const app = express();
dotenv.config();

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
))
// app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.get("/health",(req, res)=>{
    res.status(200).json({message: "Server is running"});
});
app.use("/v1/api", router);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9002;
app.listen(PORT, ()=>{
    dbConnect();
    console.log("Server is running on port", PORT);
})