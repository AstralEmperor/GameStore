export class Game{
    id!: string;
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
    price!:string | number;
}