const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
    fname:{
        type:"String",
    },
    lname:{
        type:"String"
    },
    email:{
        type:"String"
    },
    password:{
        type:"String"
    }
})


module.exports = blogSchema
