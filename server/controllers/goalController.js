// Get Goals
//@route GET/API/goals
//@access Private

const getGoals= (req,res)=>{

    res.status(200).json ({message:"Get Goals"})
}
// setGoals
//@route POST/API/goals
//@access Private
const setGoals= (req,res)=>{

    res.status(200).json ({message:"Set goals"})
}
// Update Goals
//@route PUT/API/goals
//@access Private
const updateGoals= (req,res)=>{

    res.status(200).json ({message:`Update Goal ${req.params.id}`})
}
// Delete Goals
//@route DELETE/API/goals
//@access Private
const deleteGoals= (req,res)=>{

    res.status(200).json ({message:`Delete Goal ${req.params.id}`})
}




module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}