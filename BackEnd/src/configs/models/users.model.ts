import { Schema, model } from "mongoose";

export interface User{
    id:string;
    username:string;
    email:string;
    password:string;
    isAdmin:boolean;
}

export const UserSchema = new Schema<User>({
    username:{type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true, unique:true},
    isAdmin:{type: Boolean, default:false}
},{
    timestamps: true,
    toJSON:{
        virtuals:true
    },
        toObject:{
            virtuals:true
        }
});

export const userModel = model<User>('user', UserSchema);
