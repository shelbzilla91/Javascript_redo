const getRecords =(req,res) => {
    res.status(200).json ({message: 'Get Records'})
}

const setRecords =(req,res) => {
    res.status(200).json ({message: 'Set Records'})
}

const updateRecords =(req,res) => {
    res.status(200).json ({message: 'update Records'})
}



const deleteRecords =(req,res) => {
    res.status(200).json ({message: 'delete Records'})
}

module.exports = {
    getRecords,
    setRecords, 
    updateRecords,
    deleteRecords
}