export class Game{
    id!: number;
    name!: string;
    imageUrl!: string;
    tags!:string[];
    favourite!: boolean;
    stars!: number;
    owned!:boolean;
    author!:string;
    description!:string;
    releaseDate!:string;
    specialOffer!:boolean;
    discount?:number;
    price!:number;
}