import { Component, ElementRef, ViewChild } from '@angular/core';
import { Game } from '../../shared/models/Game';
import { GamesService } from '../../services/games.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent{

    gamesRecc:Game[] = [];
    valueRecc:number = 0;
    slideRecc:number = 0;
    autoCarouselRecc:any;

    gamesOffer:Game[] = [];
    valueOffer:number = 0;
    slideOffer: number = 0;

    valueCategory:number = 0;
    slideCategory: number = 0;

    constructor(private gameService: GamesService){
      let gamesObservableRecc:Observable<Game[]>
      let gamesObservableOffer:Observable<Game[]>
      gamesObservableRecc = gameService.getAll(); 
      gamesObservableOffer = gameService.getAll();

      gamesObservableRecc.subscribe((serverGames)=>{
        this.gamesRecc = serverGames;
      })

      gamesObservableOffer.subscribe((serverGames)=>{
        this.gamesOffer = serverGames;
      })
    }

    ngOnInit(){
      this.automaticReccCarousel();
    }

    @ViewChild('carouselOffer',{static:true}) carouselOffer!:ElementRef;
    @ViewChild('cardCategory',{static:true}) cardCategory!:ElementRef;

    // filters game data, and returns only games with rating higher or equal to 4
    filterGamesWithHighRating():Game[]{
      return this.gamesRecc.filter(x => x.stars >= 4);
    }
    // filters game data, and returns only games On Sale
    filterGamesOnSale():Game[]{
      return this.gamesOffer.filter(x => x.specialOffer == true);
    }

    // Automatic reccomended carousel, switches slide based on set interval
    automaticReccCarousel(){
      return this.autoCarouselRecc = setInterval(()=> this.nextReccButton(),4000);
    }

      // on mouse enter carousel, clears set interval
    onMouseEnterCarouselRecc(){
        clearInterval(this.autoCarouselRecc);
    } 
          // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
        nextReccButton(): void{
            const cards = document.querySelectorAll('.cardRecc_li')[0];
            const itemCarouselWidthRecc:number = cards.getBoundingClientRect().width;
            const isLastSlide = this.valueRecc === this.filterGamesWithHighRating().length - 1;
            const newIndex = isLastSlide ? 0 : this.valueRecc + 1;
      
            this.valueRecc = newIndex;
            this.slideRecc = itemCarouselWidthRecc * this.valueRecc;
          }

      // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
      previousReccButton(): void{
        const cards = document.querySelectorAll('.cardRecc_li')[0];
        const itemCarouselWidthRecc = cards.getBoundingClientRect().width;
        const isFirstSlide = this.valueRecc === 0;
        const newIndex = isFirstSlide ? this.filterGamesWithHighRating().length - 1 : this.valueRecc - 1;

        this.valueRecc = newIndex;
        this.slideRecc = itemCarouselWidthRecc * this.valueRecc;
      }
    // on button click right, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    nextOfferButton(): void{
      try{
      const cards = document.querySelectorAll('.cardOffer_li-item');
      const itemsPerSlide = 3;
      const itemCarouselWidthOffer = cards[0].getBoundingClientRect().width;

      const isLastSlide = this.valueOffer >= cards.length - itemsPerSlide;
      const newIndex = isLastSlide ? 0 : this.valueOffer + 1;

      this.valueOffer = newIndex;
      this.slideOffer = itemCarouselWidthOffer * this.valueOffer;
    }catch(error){
      console.log(error);
    }
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousOfferButton(): void{
      try{
      const cards = document.querySelectorAll('.cardOffer_li-item');
      const itemsPerSlide = 3;
      const itemCarouselWidthOffer = cards[0].getBoundingClientRect().width;

      const isFirstSlide = this.valueOffer <= 0;
      const newIndex = isFirstSlide ? cards.length - itemsPerSlide : this.valueOffer - 1;

      this.valueOffer = newIndex;
      this.slideOffer = isFirstSlide ? itemCarouselWidthOffer * this.valueOffer : itemCarouselWidthOffer * this.valueOffer;
      }catch(error){
        console.log(error);
      }
    }
// on button click left, go to next slide ( takes current slide, and next slide, if next slide doesnt exist, return)
    nextCategoryButton():void{
      try{
        const cards = document.querySelectorAll('.cardCategory__li');   
        const itemCategoryCarouselWidth:number = cards[0].getBoundingClientRect().width;
        const itemsPerSlide = 4;

        const isLastSlide = this.valueCategory >= cards.length - itemsPerSlide;
        const newIndex = isLastSlide ? 0 : this.valueCategory + 1;

        this.valueCategory = newIndex;
        this.slideCategory = itemCategoryCarouselWidth * this.valueCategory;
    }catch(error){
      console.warn(error);
    }
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousCategoryButton():void{
      try{
        const cards = document.querySelectorAll('.cardCategory__li');
        const itemCategoryCarouselWidth:number = cards[0].getBoundingClientRect().width;
        const itemsPerSlide = 4;
        
        const isFirstSlide = this.valueCategory <= 0; //if there are less items
        const newIndex = isFirstSlide ? cards.length - itemsPerSlide : this.valueCategory - 1;
  
        this.valueCategory = newIndex;
        this.slideCategory = itemCategoryCarouselWidth * this.valueCategory;
      }catch(error){
        console.warn(error);
      }
    }
}
