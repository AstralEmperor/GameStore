import { Schema, model } from "mongoose";

// Interface
export interface Game{
        id:number;
        name:string;
        imageUrl:string;
        tags:string[];
        favourite:boolean;
        stars:number;
        owned:boolean;
        author:string;
        description:string;
        releaseDate:string;
        specialOffer:boolean;
        discount:number;
        price:number;
}
// Schema
export const GameSchema = new Schema<Game>(
{
    name:{type: String, required:true},
    imageUrl:{type: String, required:true},
    tags:{type:[String]},
    favourite:{type: Boolean, default:false},
    stars:{type: Number, required:true},
    owned:{type: Boolean, default:false},
    author:{type: String, required:true},
    description:{type: String, required:true},
    releaseDate:{type: String, required:true},
    specialOffer:{type: Boolean, default:false},
    discount:{type: Number, required:false},
    price:{type: Number,required:true}
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
  }
)

export const gameModel = model<Game>('game', GameSchema);