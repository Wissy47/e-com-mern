import jwt from "jsonwebtoken";

import User from "../models/userModel.js";


const login = async (req, res)=>{
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
     
    res.status(200).json({ user:{
        id: user._id,
        name: user.name,
        email: user.email
    }});
}//login

const signup = async (req, res) => {
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
    res.status(201).json({token, user:{
        id: user._id,
        name: user.name,
        email: user.email
        }}
    );
}

export{
    login,
    signup
}