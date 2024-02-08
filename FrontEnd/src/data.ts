import { Category } from "./app/components/shared/models/Categories"
import { Game } from "./app/components/shared/models/Game"
import { User } from "./app/components/shared/models/User" 

export const sample_game: Game[] = [{
    id: 1,
    name:'Dreamers',
    imageUrl:'assets/dreamers.png',
    tags:['Indie','Action','FreeToPlay','Platformer'],
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
    tags:['Racing','Action','Coop'],
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
    tags:['Strategy','Coop','Multiplayer'],
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
    tags:['Action','FPS','Multiplayer','Coop','RPG'],
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
    tags:['Action','Strategy','Multiplayer','Coop','RPG'],
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

export const sample_categories: Category[] = [
    { name: 'Indie', count: 1 },
    { name: 'Action', count: 4 },
    { name: 'FreeToPlay', count: 1 },
    { name: 'Strategy', count: 2 },
    { name: 'Multiplayer', count: 3 },
    { name: 'Coop', count: 4 },
    { name: 'RPG', count: 2 },
    { name: 'FPS', count: 1 },
    { name: 'Racing', count: 1 }
  ]

  export const sample_users: User[] = [
    { 
      username:"Marko",
      email:"warriorpronb55@gmail.com",
      password: "123",
      isAdmin: true
    },{
      username:"Milica",
      email:"milicaca@gmail.com",
      password:"sarma03",
      isAdmin: false
    }
  ];