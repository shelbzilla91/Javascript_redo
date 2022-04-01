const userModel = require("../model/userModel")

//register a new userModel
// POST/api/users
// Public

const registerUser = (req, res) => {
    res.json({ message: 'Register User'})
}

//authenticate USer
//POST api/users/login
const loginUSer = (req, res) => {
    res.json({ message: 'Login User'})
}
//Get User data
//GET api/users/me
const getMe = (req, res) => {
    res.json({ message: 'Display User'})
}
module.exports = {
    registerUser,
}