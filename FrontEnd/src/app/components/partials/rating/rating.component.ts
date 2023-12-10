import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input()
  stars!:number;

  @Input()
  size = 1.2;

  // configures stars specs
  get styles(){
    return{
      'width.rem': this.size,
      'height.rem':this.size,
      'marginRight.rem': this.size / 6
    }
  }

  // compares game.stars to 1-5 number array, and displays image accordingly(if number if greater than 0.5 than add full star, if its lower add half a star or, otherwise shows empty star)
  getStarImage(current:number): string{
    const previousHalf = current - 0.5;
    const imageName = this.stars >= current 
    ? 'star-full': this.stars >= previousHalf 
    ? 'star-half' : 'star-empty';
    return `/assets/${imageName}.png`;
  }
}
