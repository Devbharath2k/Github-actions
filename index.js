const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); 
const app = express();
require("dotenv").config();
const PORT = process.env.PORT

const router = require("./Router/route.js")


app.use(cors());
app.use(express.json());
app.use(router)


app.get('/', function (req, res) {
    res.send('Hello testing')
  })

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log('Server is listening on port ' + PORT);
        });
    } catch (error) {
        console.log(error);
        
    }
};

connectToDB();
