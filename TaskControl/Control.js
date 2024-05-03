const { create } = require("domain");
const UserSchema = require("../Usermodel/Schema.js");
const bcrypt = require('bcrypt');


const CreateMethod = async (req, res) => {

    try {

        if (!req.email && !req.password) {
            return (
                res.status(300).json({
                    message: "SomeField is are empty"
                })
            )
        }

        const user = await UserSchema.findone(email)

        if (user) {
            return (
                res.status(300).json({
                    message: "email is all registered"
                })
            )
        }

        const hashpassword = await bcrypt.hash(password, 10)

        req.password = hashpassword

        const CreateNewuser = await new create(req)

        await CreateNewuser.save()

        res.status(200).json({
            message: "successfully created user",
            data: user._id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "invalid user not data"
        })
    }
}


const gettingMethod = async (req, res) => {
    try {
        const user = await UserSchema.find()

        if (user) {
            return (
                res.status(301).json({
                    message: "all you get or not"
                })
            )
        }

        res.status(200).json({
            message:"successfully recived in all user",
            data: user
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "invalid error "
        })
    }
}

module.exports = {
    CreateMethod,
    gettingMethod
}