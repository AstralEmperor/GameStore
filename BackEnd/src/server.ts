import express from 'express';
import cors from 'cors';
import { sample_game } from './data';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/games", (req,res) => {
    res.send(sample_game);
});

const port = 5000;
app.listen(port,() => {
    console.log("website hosted on http://localhost:" + port)
})