const mongoose = require ('mongoose')


const recordSchema = mongoose.Schema ({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    Band:{
        type:String,
        required: [true, 'Please add a Band name']
    },
    Album:{
        type:String,
        required: [true, 'Please add a Album name'],
        unique: true
    },
    Year:{
        type:String,
        required: [true, 'Please add a pressing Date']
    },
    Price:{
        type:String,
        required: [true, 'Please add a Price']
    }
   
})

module.exports = mongoose.model ('Record', recordSchema)

