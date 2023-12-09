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
    value:number = 0;
    slide: number = 0;

    constructor(private gameService:GamesService){
     this.reccGames = gameService.getAll(); 
    }

    @ViewChild('carousel',{static:true}) carousel!:ElementRef;
    @ViewChild('carouselContent',{static:true}) carouselContent!:ElementRef;

    // takes the current slide 

    // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    next(): void{
      let rect = this.carousel.nativeElement.getBoundingClientRect().width;
      const isLastSlide = this.value === this.reccGames.length - 1;
      const newIndex = isLastSlide ? 0 : this.value + 1;
      this.value = newIndex;
      this.slide = rect * this.value;
      console.log(this.value, this.slide);
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previous(): void{
      let rect = this.carousel.nativeElement.getBoundingClientRect().width;
      const isFirstSlide = this.value === 0;
      const newIndex = isFirstSlide ? this.reccGames.length - 1 : this.value - 1;
      this.value = newIndex;
      this.slide = rect * this.value;
      console.log(this.value, this.slide);
    }
}
