const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); 
const app = express();

require("dotenv").config();

const router = require("./Router/route.js")


//const PORT = process.env.PORT
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(router)


app.get('/', function (req, res) {
    res.send('Hello testing')
  })

const connectToDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGODB_URI,);
        await mongoose.connect("mongodb+srv://axessmongo:admin@cluster0.ozjlhdj.mongodb.net/testing?retryWrites=true&w=majority");
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log('Server is listening on port ' + PORT);
        });
    } catch (error) {
        console.log(error);
        
    }
};

connectToDB();
