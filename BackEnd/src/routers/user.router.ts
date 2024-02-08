import { Router } from "express";

import asyncHandler from "express-async-handler";
import { User, userModel } from "../configs/models/users.model";
import { sample_users } from "../data";
import { HTTP_BAD_REQUEST } from "../configs/constants/http_status";

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
            res.send(user);
        }
        res.status(HTTP_BAD_REQUEST).send("Account already exists!")
        return;
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

export default router;