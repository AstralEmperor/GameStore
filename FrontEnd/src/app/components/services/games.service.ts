import { Injectable } from '@angular/core';

import { sample_game } from 'src/data';
import { Game } from '../shared/models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getAll():Game[]{
    return sample_game;
  }
}
