import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'

const getAuthUserID = (req, res)=>{
    const {token} = req.cookies;
    if(!token){res.status(401); throw new Error("Missing token");}
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded.id;
}

const adminCheck = asyncHandler(async(req, res, next)=>{
    const id = getAuthUserID(req, res);
    const user = await User.findById(id);
    if(!user.is_admin){
        res.status(401);
        throw new Error("Unauthorize access");
    }
    next();
})

export{
    getAuthUserID,
    adminCheck
}