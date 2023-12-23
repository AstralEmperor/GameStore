import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
    autoCarouselRecc:any;

    gamesOffer:Game[] = [];
    valueOffer:number = 0;
    slideOffer: number = 0;

    valueCategory:number = 0;
    slideCategory: number = 0;

    constructor(private gameService:GamesService){
     this.gamesRecc = gameService.getAll(); 
     this.gamesOffer = gameService.getAll();
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
    
    // on button click right, go to next slide ( takes current slide, and next slide, , calculates total slides based on formula itemLength/itemsPerSlide, if next slide doesnt exist, return)
    nextOfferButton(): void{
      try{
      const cards = document.querySelectorAll('.cardOffer_li-item')[0];
      const cardWrap = parseFloat(getComputedStyle(this.carouselOffer.nativeElement).gap);

      const itemsPerSlide = 3;
      const totalSlides = Math.ceil(this.filterGamesOnSale().length/itemsPerSlide);
      
      const itemCarouselWidthOffer = cards.getBoundingClientRect().width;
      const isLastSlide = this.valueOffer === totalSlides - 1;
      const newIndex = isLastSlide ? 0 : this.valueOffer + 1;

      this.valueOffer = newIndex;
      this.slideOffer = isLastSlide ? itemCarouselWidthOffer * this.valueOffer : itemCarouselWidthOffer * this.valueOffer + cardWrap;
    }catch(error){
      console.log(error);
    }
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, calculates total slides based on formula itemLength/itemsPerSlide, if previous slide doesnt exist, return)
    previousOfferButton(): void{
      try{
      const cards = document.querySelectorAll('.cardOffer_li-item')[0];
      const cardWrap = parseFloat(getComputedStyle(this.carouselOffer.nativeElement).gap);

      const itemsPerSlide = 3;
      const totalSlides = Math.ceil(this.filterGamesOnSale().length/itemsPerSlide);

      const itemCarouselWidthOffer = cards.getBoundingClientRect().width;
      const isFirstSlide = this.valueOffer === 0;
      const newIndex = isFirstSlide ? totalSlides - 1 : this.valueOffer - 1;

      this.valueOffer = newIndex;
      this.slideOffer = isFirstSlide ? itemCarouselWidthOffer * this.valueOffer : itemCarouselWidthOffer * this.valueOffer + cardWrap;
      }catch(error){
        console.log(error);
      }
    }

    nextCategoryButton():void{
      try{
        const cards = document.querySelectorAll('.cardCategory__li');
        const cardWrap = parseFloat(getComputedStyle(this.cardCategory.nativeElement).gap);
        
        const itemCategoryCarouselWidth:number = cards[0].getBoundingClientRect().width;

        const itemsPerSlide = 3;
        const totalSlides = Math.ceil(cards.length/itemsPerSlide);

        const isLastSlide = this.valueCategory === totalSlides - 1;
        const newIndex = isLastSlide ? 0 : this.valueCategory + 1;

        this.valueCategory = newIndex;
        this.slideCategory = isLastSlide ? itemCategoryCarouselWidth * this.valueCategory : itemCategoryCarouselWidth * this.valueCategory + cardWrap;
    }catch(error){
      console.warn(error);
    }
    }
    // on button click right, go to previous slide ( takes current slide, and previous slide, if previous slide doesnt exist, return)
    previousCategoryButton():void{
      try{
        const cards = document.querySelectorAll('.cardCategory__li');
        const cardWrap = parseFloat(getComputedStyle(this.cardCategory.nativeElement).gap);

        const itemCategoryCarouselWidth:number = cards[0].getBoundingClientRect().width;

        const itemsPerSlide = 4;
        const totalSlides = Math.ceil(cards.length/itemsPerSlide);

        const isFirstSlide = this.valueCategory === 0;
        const newIndex = isFirstSlide ? totalSlides - 1 : this.valueCategory - 1;
  
        this.valueCategory = newIndex;
        this.slideCategory = isFirstSlide ? itemCategoryCarouselWidth * this.valueCategory : itemCategoryCarouselWidth * this.valueCategory + cardWrap;
      }catch(error){
        console.warn(error);
      }
    }
}
