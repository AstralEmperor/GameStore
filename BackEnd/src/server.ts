import express from 'express';
import cors from 'cors';
import { sample_game, sample_categories } from './data';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/games", (req,res) => {
    res.send(sample_game);
});

app.get("/api/games/categories", (req,res)=>{
    res.send(sample_categories);
})

app.get("/api/games/category/:categoryName", (req,res)=>{
        const categoryName = req.params.categoryName;
        const games = sample_game.filter(game => game.tags?.includes(categoryName));
        res.send(games);
})

const port = 5000;
app.listen(port,() => {
    console.log("website hosted on http://localhost:" + port)
})
