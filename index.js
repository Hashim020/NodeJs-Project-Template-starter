import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";



// Basic configurations and connections
dotenv.config();
connectDB();
const port = process.env.PORT || 5000;
const app = express();




// Parse incoming JSON and URL-encoded data with no size limit
app.use(express.json({ limit: "Infinity" }));
app.use(express.urlencoded({ limit: "Infinity", extended: true }));



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });