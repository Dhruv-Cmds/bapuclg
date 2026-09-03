import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { Enquiry } from "./models/Enquiry.js";

const app = express()

app.use(cors())
app.use(express.json())

let conn = await mongoose.connect("mongodb://localhost:27017/bapu")
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log(err));

app.post("/api/enquiries", async (req, res) => {

    try {
        const enquiry = await Enquiry.create(req.body);

        res.status(201).json({
            success: true,
            data: enquiry
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

app.listen(3000);
