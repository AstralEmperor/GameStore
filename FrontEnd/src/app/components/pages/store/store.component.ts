import { Component, Input, ViewChild } from '@angular/core';
import { Game } from '../../shared/models/Game';
import { GamesService } from '../../services/games.service';


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

    games:Game[] = [];
    i:number;
  
    constructor(private gameService:GamesService){
     this.i = 0;
     this.games = gameService.getAll();
    }
  
    currentIndex:number = 0;

    @Input()
    index!:number;

    getSlide() {
      return this.games[this.i];
    }

    next(){
      this.i < this.games.length - 1 ? this.i++ : (this.i = 0);
      console.log(this.i, this.games.length);
    }
    previous(){
      this.i == 0 ? (this.i = this.games.length - 1) : this.i--;
      console.log(this.i, this.games.length);
    }
    

}
