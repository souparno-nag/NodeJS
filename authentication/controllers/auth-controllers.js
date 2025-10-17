/*
This requires two endpoints -
1. register endpoint
2. login endpoint
*/

const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register controller
const registerUser = async (req, res) => {
    try {
        // extract user information from request body
        const {username, email, password, role} = req.body;
        // check if the user already exists in the database
        const checkExistingUser = await User.findOne({$or : [{username}, {email}]});
        if (checkExistingUser) {
            return res.status(400).json({
                success : false,
                message : 'User already exists... either with the same username or same email. Please try with a different username or email.',
            });
        }
        // hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create a new user to save to database
        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role : role || 'user'
        });
        await newlyCreatedUser.save();
        if (newlyCreatedUser) {
            res.status(200).json({
                success : true,
                message : 'User registered successfully!',
            })
        } else {
            return res.status(400).json({
                success : false,
                message : 'Unable to register user. Please try again.',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Some error occured! Please try again',
        });
    }
};

// login controller
const loginUser = async (req, res) => {
    try {
        // return res.status(200).json({ success : true});
        const {username, password} = req.body;
        // find if the current user exists in database
        const user = await User.findOne({username});
        if (!user) {
            return res.status(400).json({
                success : false,
                message : 'Invalid username or password'
            });
        }
        // check whether password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success : false,
                message : 'Invalid username or password'
            });
        }
        // create user token
        const accessToken = jwt.sign({
            userId : user._id,
            username : user.username,
            role : user.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn : '15m'
        });
        res.status(200).json({
            success : true,
            message : 'Logged in successfully',
            accessToken
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Some error occured! Please try again',
            accessToken
        });
    }
}

module.exports = {registerUser, loginUser};