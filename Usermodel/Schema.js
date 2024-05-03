const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema({
  fname: {
    type: String,
    
  },
  lname: {
    type: String,
  
  },
  email: {
    type: String,
   
  },
  phone: {
    type: Number,
  },
  
  passwd: {
    type: String,
    
  },
 
});

module.exports = mongoose.model("datas", blogSchema);