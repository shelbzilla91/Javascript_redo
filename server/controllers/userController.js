
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require ('express-async-handler')
const User = require ('../model/userModel')

//register a new userModel
// POST/api/users
// Public

const registerUser = asyncHandler(async(req, res) => {
     const { name, email, password} = req.body
     if (!name || !email || !password) {
         res.status (400)
         throw new Error (' Please add all fields')
     }

     //check if user exists
     const userExists= await User.findOne ({email})
     if (userExists){
         res.ststaus(400)
         throw new error ('User already exists')
     }
     // Hash PW
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)

     //Create User
     const user = await User.create ({
         name,
         email,
         password: hashedPassword
     })
     if (user) {
         res.status(201).json ({
             _id : user.id,
             name: user.name,
             email: user.email,
         })
     }else {
         res.status (400)
         throw new Error ('Invalid user data')
     }

  
})

//authenticate USer
//POST api/users/login

const loginUser = asyncHandler(async(req, res) => {
    //check user email
    const{ email, password}= req.body
    const user = await User.findOne ({email})

    if (user && (await bcrypt.compare (password, user.password))) {
        res.json ({
            _id : user.id,
             name: user.name,
             email: user.email,
        })

    }else {
            res.status (400)
            throw new Error (' invalid login')
        }


    res.json({ message: 'Login User'})
})

//Get User data
//GET api/users/me

const getMe = asyncHandler(async(req, res) => {
    res.json({ message: 'Display User'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}