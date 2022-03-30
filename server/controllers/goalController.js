
const asyncHandler = require ('express-async-handler')




const getRecords = asyncHandler(async(req,res) => {
    res.status(200).json ({message: 'Get Records'})
})

const setRecords = asyncHandler(async (req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new error ('Please add a text field')

    }
    res.status(200).json ({message: 'Set Records'})
})

const updateRecords = asyncHandler(async(req,res) => {
    res.status(200).json ({message: 'update Records'})
})



const deleteRecords = asyncHandler(async(req,res) => {
    res.status(200).json ({message: 'delete Records'})
})

module.exports = {
    getRecords,
    setRecords, 
    updateRecords,
    deleteRecords
}