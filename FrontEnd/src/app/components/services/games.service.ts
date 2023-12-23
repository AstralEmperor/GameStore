import { Injectable } from '@angular/core';

import { sample_categories, sample_game } from 'src/data';
import { Game } from '../shared/models/Game';
import { Category } from '../shared/models/Categories';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getAll():Game[]{
    return sample_game;
  }
  getAllCategories(): Category[]{
    return sample_categories;
  }

  getGamesByCategory(category:string):Game[]{
    return category === 'All' ? 
    this.getAll() : 
    this.getAll().filter(game => game.tags?.includes(category));
  }
}
