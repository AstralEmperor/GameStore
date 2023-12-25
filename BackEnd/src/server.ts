import dotenv from 'dotenv';
dotenv.config();

import { dbConnect } from './configs/dist/database.config';
import express from 'express';
import cors from 'cors';
import { sample_game, sample_categories } from './data';
import gameRouter from './routers/game.router';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
app.use("/api/store", gameRouter);


app.get("/api/store/games", (req,res) => {
    res.send(sample_game);
});

app.get("/api/store/games/categories", (req,res)=>{
    res.send(sample_categories);
})

app.get("/api/store/category/:categoryName", (req,res)=>{
        const categoryName = req.params.categoryName;
        const games = sample_game.filter(game => game.tags?.includes(categoryName));
        res.send(games);
})

app.get("api/store/games/:gameId", (req,res)=>{
    const gameId = req.params.gameId;
    const game = sample_game.filter(game => game.id === parseInt(gameId));
    res.send(game);
})

const port = 5000;
app.listen(port,() => {
    console.log("website hosted on http://localhost:" + port)
})

