import { Component, ElementRef, ViewChild } from '@angular/core';
import { Game } from '../../shared/models/Game';
import { GamesService } from '../../services/games.service';



@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent{

    gamesRecc:Game[] = [];
    valueRecc:number = 0;
    slideRecc: number = 0;

    gamesOffer:Game[] = [];
    valueOffer:number = 0;
    slideOffer: number = 0;


    constructor(private gameService:GamesService){
     this.gamesRecc = gameService.getAll(); 
     this.gamesOffer = gameService.getAll();
    }

    @ViewChild('carouselRecc',{static:true}) carouselRecc!:ElementRef;
    @ViewChild('carouselOffer',{static:true}) carouselOffer!:ElementRef;

    // filters game data, and returns only games with rating higher or equal to 4
    filterGamesWithHighRating():Game[]{
      return this.gamesRecc.filter(x => x.stars >= 4);
    }
    // filters game data, and returns only games On Sale
    filterGamesOnSale():Game[]{
      return this.gamesOffer.filter(x => x.specialOffer == true);
    }

    // takes the current slide 

    // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    nextReccButton(): void{
      const itemCarouselWidthRecc:number = this.carouselRecc.nativeElement.getBoundingClientRect().width;
      const isLastSlide = this.valueRecc === this.filterGamesWithHighRating().length - 1;
      const newIndex = isLastSlide ? 0 : this.valueRecc + 1;

      this.valueRecc = newIndex;
      this.slideRecc = itemCarouselWidthRecc * this.valueRecc;
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousReccButton(): void{
      const itemCarouselWidthRecc:number = this.carouselRecc.nativeElement.getBoundingClientRect().width;
      const isFirstSlide = this.valueRecc === 0;
      const newIndex = isFirstSlide ? this.filterGamesWithHighRating().length - 1 : this.valueRecc - 1;

      this.valueRecc = newIndex;
      this.slideRecc = itemCarouselWidthRecc * this.valueRecc;
    }


    // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    nextOfferButton(): void{
      const itemCarouselWidthOffer:number = this.carouselOffer.nativeElement.getBoundingClientRect().width;
      const isLastSlide = this.valueOffer === this.filterGamesOnSale().length - 1;
      const newIndex = isLastSlide ? 0 : this.valueOffer + 1;

      this.valueOffer = newIndex;
      this.slideOffer = itemCarouselWidthOffer * this.valueOffer;
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousOfferButton(): void{
      const itemCarouselWidthOffer:number = this.carouselOffer.nativeElement.getBoundingClientRect().width;
      const isFirstSlide = this.valueOffer === 0;
      const newIndex = isFirstSlide ? this.filterGamesOnSale().length - 1 : this.valueOffer - 1;

      this.valueOffer = newIndex;
      this.slideOffer = itemCarouselWidthOffer * this.valueOffer;
    }
}
