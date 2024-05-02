const { create } = require("domain");
const UserSchema =require("../Usermodel/Schema.js");
const bcryptjs = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jsonwebToken =require('jsonwebtoken')

const CreateMethod = async (req, res) =>{
   
    try {

        
        if(!req.email && !req.password){
            return(
                res.status(300).json({
                    message:"SomeField is are empty"
                })
            )
        }
        
        const user = await UserSchema.findone(email)

        if(user){
            return(
                res.status(300).json({
                    message:"email is all registered"
                })
            )
        }

        const hashpassword = await bcryptjs.hash(password, salt)

         req.password = hashpassword

        const CreateNewuser = await new create(req)

        await CreateNewuser.save()

        res.status(200).json({
            message:"successfully created user",
            data: user._id
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"invalid user not data"
        })
    }
}


module.exports ={
    CreateMethod
}