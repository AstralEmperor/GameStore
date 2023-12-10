import { Component, ElementRef, ViewChild } from '@angular/core';
import { Game } from '../../shared/models/Game';
import { GamesService } from '../../services/games.service';



@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent{

    reccGames:Game[] = [];
    valueRecc:number = 0;
    slideRecc: number = 0;

    offersGames:Game[] = [];
    valueOffer:number = 0;
    slideOffer: number = 0;



    constructor(private gameService:GamesService){
     this.reccGames = gameService.getAll(); 
     this.offersGames = gameService.getAll();
    }

    @ViewChild('carouselRecc',{static:true}) carouselRecc!:ElementRef;
    @ViewChild('carouselOffer',{static:true}) carouselOffer!:ElementRef;

    // takes the current slide 

    // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    nextRecc(): void{
      let rect = this.carouselOffer.nativeElement.getBoundingClientRect().width;
      const isLastSlide = this.valueRecc === this.reccGames.length - 1;
      const newIndex = isLastSlide ? 0 : this.valueRecc + 1;
      this.valueRecc = newIndex;
      this.slideRecc = rect * this.valueRecc;
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousRecc(): void{
      let rect = this.carouselOffer.nativeElement.getBoundingClientRect().width;
      const isFirstSlide = this.valueRecc === 0;
      const newIndex = isFirstSlide ? this.reccGames.length - 1 : this.valueRecc - 1;
      this.valueRecc = newIndex;
      this.slideRecc = rect * this.valueRecc;
    }


    // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    nextOffer(): void{
      let rect = this.carouselOffer.nativeElement.getBoundingClientRect().width;
      const isLastSlide = this.valueOffer === this.offersGames.length - 1;
      const newIndex = isLastSlide ? 0 : this.valueOffer + 1;
      this.valueOffer = newIndex;
      this.slideOffer = rect * this.valueOffer;
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousOffer(): void{
      let rect = this.carouselOffer.nativeElement.getBoundingClientRect().width;
      const isFirstSlide = this.valueOffer === 0;
      const newIndex = isFirstSlide ? this.offersGames.length - 1 : this.valueOffer - 1;
      this.valueOffer = newIndex;
      this.slideOffer = rect * this.valueOffer;
    }
}
