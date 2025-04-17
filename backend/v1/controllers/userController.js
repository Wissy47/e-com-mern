import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import { getAuthUserID } from "../utils/userStatus.js";


const login = asyncHandler (async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    const isValidPassword = await user.verifyPassword(password, user.password);
    if(!isValidPassword){
        return res.status(401).json({message: "Invalid password"});
    }
    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: "24h"});
     res.cookie("token", token, {
       httpOnly: true,
       secure: process.env.NODE_ENV === "production",
       sameSite: "strict",
       maxAge: 24 * 60 * 60 * 1000,
     });
     const authUser = {...user._doc}
     delete authUser.password
    res.status(200).json({ user: authUser });
})//login

const signup = asyncHandler( async (req, res) => {
    const{name, email, password} = req.body;
    if (!name || !email|| !password) {
         return res.status(400).json({ message: "One or more required field(s) are missing" });
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "Email already in use"});
    }
    const user = await User.create({ name, email, password });
    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY,{expiresIn: "24h"});
    res.cookie('token',token,
        {
            httpOnly: true,
            maxAge: 24*60*60*1000,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        }
    );
    const authUser = { ...user._doc };
    delete authUser.password;
    res.status(201).json({ user: authUser });
}); // signup

const logout = asyncHandler( 
    async (req, res) => {
       res.clearCookie("token")
    }
)
const authUser = asyncHandler(
    async (req, res) => {
        const id = getAuthUserID()
        const user = await User.findById(id).lean()
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        delete user.password // remove the password field
        res.status(200).json({user})
    }
)

export{
    login,
    signup,
    logout,
    authUser
}