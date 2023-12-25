import {Router} from 'express';

import { sample_categories, sample_game } from '../data';
import asyncHandler from 'express-async-handler';
import { gameModel } from '../configs/models/games.model';


const router = Router();

router.get("/seed", asyncHandler (
    async(req,res)=>{
        const gamesCount = await gameModel.countDocuments();
        if(gamesCount > 0){
            res.send('seed is already done');
            return;
        }
        await gameModel.create(sample_game);
        res.send("Seed is Done!")
    }
));
router.get("/games", asyncHandler(
    async(req,res)=>{
    const games = await gameModel.find();
    res.send(games);
    }
));

// router.get("/games/categories", asyncHandler(
//   async (req,res)=>{
//     const categories = await categoryModel.aggregate([
//         {
//             $unwind:'$tags'
//         },
//         {
//             $group:{
//                 _id:'$tags',
//                 count:{$sum: 1}
//             }
//         },
//         {
//             $project:{
//                 _id: 0,
//                 name:'$_id',
//                 count:'$count'
//             }
//         }
//     ]).sort({count: -1});
//     const all = {
//         name : 'All',
//         count: await gameModel.countDocuments()
//     }
//     categories.unshift(all);
//     res.send(categories);
//   }
// ))

router.get("/category/:categoryName", asyncHandler(
    async (req,res)=>{
        const searchRegx = new RegExp(req.params.categoryName, 'i'); // searchRegular expression, i makes it caseInsensitive
        const games = await gameModel.find({name:{$regx:searchRegx}})
        res.send(games);
    }
))

router.get("/games/:gameId", (req,res)=>{
    const gameId = req.params.gameId;
    const game = sample_game.filter(game => game.id == parseInt(gameId));
    res.send(game);
})

export default router;