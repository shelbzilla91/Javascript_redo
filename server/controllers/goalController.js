const asyncHandler = require ('express-async-handler')


// Get Goals
//@route GET/API/goals
//@access Private

const getGoals= asyncHandler(async(req,res)=>{

    res.status(200).json ({message:"Get Goals"})
}
// setGoals
//@route POST/API/goals
//@access Private
const setGoals= asyncHandler (async(req,res)=>{

   if (!req.body.text){
res.status (400)
throw new Error ('Please add text field')


   }

    res.status(200).json ({message:"Set goals"})
}
// Update Goals
//@route PUT/API/goals
//@access Private
const updateGoals= asyncHandler(async(req,res)=>{

    res.status(200).json ({message:`Update Goal ${req.params.id}`})
}
// Delete Goals
//@route DELETE/API/goals
//@access Private
const deleteGoals= asyncHandler(async(req,res)=>{

    res.status(200).json ({message:`Delete Goal ${req.params.id}`})
}




module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}