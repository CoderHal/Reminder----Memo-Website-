import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

// https://www.mongodb.com/cloud/atlas


const CONECTION_URL = "mongodb+srv://admin-hal:giJXhxLkQoFbpZdI@cluster0.qqsrwa6.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONECTION_URL, {useUnifiedTopology:true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log((error.message)));

