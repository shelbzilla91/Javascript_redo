const mongoose = require ('mongoose')


const recordSchema = mongoose.Schema ({
    text:{
       
    title: String,
    band: String,
    genre:String,
    release:Number,
    img:String,
    price: Number
   
}})

module.exports = mongoose.model ('Record', recordSchema)

