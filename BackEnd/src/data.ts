import { Game } from "./configs/models/games.model";
import { User } from "./configs/models/users.model";


export const sample_game: Game[] = [{
    id: 1,
    name:'Dreamers',
    imageUrl:'assets/dreamers.png',
    tags:['indie','action','freetoplay','platformer'],
    favourite:false,
    stars:4,
    owned:false,
    author:'AstralStorm',
    description:'An indie game created in reflection of fear of pigeons, like a pigeon nightmare you can not escape',
    releaseDate:'24-02-2019',
    specialOffer:false,
    discount:0,
    price:0

},{
    id: 2,
    name:'Need for Speed - Most Wanted',
    imageUrl:'assets/mostwanted.jpg',
    tags:['racing','action','coop'],
    favourite:false,
    stars:3.8,
    owned:false,
    author:'Electronics Arts',
    description:'A most popular racing game of all time',
    releaseDate:'12-12-2005',
    specialOffer:true,
    discount:10,
    price:5
},{
    id: 3,
    name:'Stronghold Crusader 2',
    imageUrl:'assets/Crusader2.webp',
    tags:['strategy','coop','multiplayer'],
    favourite:false,
    stars:4.7,
    owned:false,
    author:'Firefly Studio',
    description:'An old and popular strategy game, based on crusader conquest to free the holy city',
    releaseDate:'05-03-2003',
    specialOffer:true,
    discount:20,
    price:7.25
},{
    id: 4,
    name:'Counter-Strike 2',
    imageUrl:'assets/CSGO2.webp',
    tags:['action','fps','multiplayer','coop','rpg'],
    favourite:false,
    stars:5,
    owned:false,
    author:'Valve',
    description:'First person shooter, that first came famous as Counter Strike 1.6. Its one of the most popular games today, with monthly player base of over 25 milion',
    releaseDate:'27-09-2023',
    specialOffer:false,
    discount:0,
    price:14.29
},{
    id: 5,
    name:'SpellForce 1',
    imageUrl:'assets/SpellForce.jpg',
    tags:['action','strategy','multiplayer','coop','rpg'],
    favourite:true,
    stars:4.67,
    owned:true,
    author:'Phenomic',
    description:'An old and popular strategy game, famous of its customise-able characters skill tree; A mix of action and strategy makes it a masterpiece through ages',
    releaseDate:'03-11-2009',
    specialOffer:true,
    discount:80,
    price:0.99
}]

export const sample_categories: any[] = [
    { name: 'indie', count: 1 },
    { name: 'action', count: 4 },
    { name: 'freetoplay', count: 1 },
    { name: 'strategy', count: 2 },
    { name: 'multiplayer', count: 3 },
    { name: 'coop', count: 4 },
    { name: 'rpg', count: 2 },
    { name: 'fps', count: 1 },
    { name: 'racing', count: 1 }
  ]

  export const sample_users: User[] = [
    { 
      id:"1",
      username:"Marko",
      email:"warriorpronb55@gmail.com",
      password: "123",
      isAdmin: true
    },{
      id:"2",
      username:"Milica",
      email:"milicaca@gmail.com",
      password:"sarma03",
      isAdmin: false
    }
  ];