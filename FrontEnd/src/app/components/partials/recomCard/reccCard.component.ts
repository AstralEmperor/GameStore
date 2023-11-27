import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../shared/models/Game';

@Component({
  selector: 'reccomdedCard',
  templateUrl: './reccCard.component.html',
  styleUrls: ['./reccCard.component.css']
})
export class NewComponent {

  games:Game[] = [];
  constructor(private gameService:GamesService){
   this.games = gameService.getAll();
  }
}
