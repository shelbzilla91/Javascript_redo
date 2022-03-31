
const asyncHandler = require ('express-async-handler')

const Record = require ('../model/recordModel')



const getRecords = asyncHandler(async(req,res) => {
    const records = await Record.find()
    res.status(200).json(records)
})

const setRecords = asyncHandler(async (req,res) => {

    const record = await Record.create ({
        text: req.body.text,
    })


    res.status(200).json (record)
})

const updateRecords = asyncHandler(async(req,res) => {
    const record = await Record.findById(req.params.id)

    if (!record){
        res.status(400)
        throw new Error ('record not found')
    }

    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    res.status(200).json(updatedRecord)
})



const deleteRecords = asyncHandler(async(req,res) => {
    const record = await Record.findById(req.params.id)

    if (!record) {
        res.status(400)
        throw new Error ('record not found')
    }
    await record.remove()
    res.status(200).json({id:req.params.id})
})

module.exports = {
    getRecords,
    setRecords, 
    updateRecords,
    deleteRecords
}