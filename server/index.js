import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config' 

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
// https://www.mongodb.com/cloud/atlas



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL, {useUnifiedTopology:true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log((error.message)));

