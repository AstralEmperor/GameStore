import { Schema, model, Types} from "mongoose";
import { Game, GameSchema } from "./games.model";
import { OrderStatus } from "../constants/order_status";

export interface OrderItem{
    game: Game;
    price:number;
    quantity:number;
}

export const OrderItemSchema = new Schema<OrderItem>({
    game:{type: GameSchema, required:true},
    price:{type: Number, required:true},
    quantity:{type: Number, required:true}
});

export interface Order{
    id:string;
    name: string;
    item:OrderItem[];
    totalPrice:number;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export const OrderSchema = new Schema<Order>({
    name:{type: String, required:true},
    item:{type:[OrderItemSchema], required:true},
    totalPrice:{type: Number, required:true},
    paymentId:{type: String},
    status:{type: String, default:OrderStatus.NEW},
    user:{type: Schema.Types.ObjectId, required:true}
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
})

export const OrderModel = model<Order>('order', OrderSchema);