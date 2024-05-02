const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); 
const app = express();
const PORT = process.env.PORT || 6000
require("dotenv").config();


app.use(cors());
app.use(express.json());


const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log('Server is listening on port ' + PORT);
        });
    } catch (error) {
        console.log(error);
        res.status(401);
    }
};

connectToDB();
