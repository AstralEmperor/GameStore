import dotenv from 'dotenv';
dotenv.config();

import { dbConnect } from './configs/dist/database.config';
import express from 'express';
import cors from 'cors';
import gameRouter from './routers/game.router';
import userRouter from './routers/user.router';

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/store", gameRouter);
app.use("/api/store/users", userRouter);


const port = 5000;
app.listen(port,() => {
    console.log("website hosted on http://localhost:" + port)
})

