const User = require("../models/User");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { email, name, password, role } = req.body;
        if (!email || !name || !password)
            throw new Error("Incomplete information");

        // if (role !== 'roleA' || role !== 'roleB')
        //     throw new Error("Invalid role");
        const user = await User.create({
            email,
            name,
            password,
            role
        })
        res.status(201).json({
            user
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error
        })
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user)
            throw new Error("User not found");

        const token = jwt.sign({
            email,
            role : user.role
        }, process.env.JWT_SECRET);

        res.status(200).json({
            email,
            token
        })
    } catch (error) {
        console.log(error);
    }  
}

module.exports = {
    signup,
    signin
}