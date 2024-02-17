import { Router } from "express";

import asyncHandler from "express-async-handler";
import { User, userModel } from "../configs/models/users.model";
import { sample_users } from "../data";
import { HTTP_BAD_REQUEST } from "../configs/constants/http_status";
import jwt from "jsonwebtoken";
const router = Router();

// sends json data from sample_users to the mongoDB Atlas
router.get("/seed", asyncHandler (
    async(req,res)=>{
        const userCount = await userModel.countDocuments();
        if(userCount > 0){
            res.send('seed is already done');
            return;
        }
        await userModel.create(sample_users);
        res.send("Seed is Done!")
    }
));

router.post("/login", asyncHandler(
    async(req,res)=>{
        const {username, password} = req.body;
        const user = await userModel.findOne({username, password});
        if(user){
            res.send(generateTokenResponse(user));
            return;
        }else{
            res.status(HTTP_BAD_REQUEST).send("Account already exists!")
            return;
        }
    }
))

router.post("/register", asyncHandler(
    async(req,res) => {
        const {username, email, password} = req.body;
        const user = await userModel.findOne({username});
        if(user){
            res.status(HTTP_BAD_REQUEST).send("Account already exists!")
            return;
        }
        const newUser:User = {
            id:'',
            username,
            email:email.toLowerCase(),
            password,
            isAdmin: false
        }
        const dbUser = await userModel.create(newUser);
        res.send(dbUser);
    }
))

// generates JWT 
const generateTokenResponse = (user: User) =>{
    const token = jwt.sign({
        id: user.id, email:user.email, isAdmin:user.isAdmin
    },'process.env.JWT_SECRET!', {
        expiresIn:"30d"
    });

    return{
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token
    }
}

export default router;