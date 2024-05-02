const mongoose = require('mongoose')

const {Schema} = mongoose 

const TokenSchema = new Schema.mongoose({
    token: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '2h'
    }
})


module.exports = TokenSchema