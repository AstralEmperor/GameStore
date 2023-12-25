import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
    connect (process.env.MONGO_URI!,{
    } as ConnectOptions).then(
        () => console.log("connected to MongoDB Atlas succesfully"),
        (error) => console.log(error)
    )
}