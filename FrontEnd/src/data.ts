import { Game } from "./app/components/shared/models/Game"

export const sample_game: Game[] = [{
    id: 1,
    name:'Dreamers',
    imageUrl:'assets/dreamers.png',
    tags:['Indie','Action','FreeToPlay','Platformer'],
    favourite:false,
    stars:4,
    owned:false,
    author:'Marko Kovačević',
    description:'An indie game created in reflection of fear of pigeons, like a pigeon nightmare you can not escape',
    releaseDate:'24-02-2019',
    specialOffer:false,
    price:0

},{
    id: 2,
    name:'Need for Speed - Most Wanted',
    imageUrl:'assets/mostwanted.jpg',
    tags:['Racing','Action'],
    favourite:false,
    stars:3.8,
    owned:false,
    author:'Electronics Arts',
    description:'A most popular racing game of all time',
    releaseDate:'12-12-2005',
    specialOffer:true,
    price:5
},{
    id: 3,
    name:'Stronghold Crusader 2',
    imageUrl:'assets/Crusader2.webp',
    tags:['Strategy','Coop','Multiplayer'],
    favourite:false,
    stars:4.7,
    owned:false,
    author:'Firefly Studio',
    description:'An old and popular strategy game, based on crusader conquest to free the holy city',
    releaseDate:'05-03-2003',
    specialOffer:false,
    price:10
}]