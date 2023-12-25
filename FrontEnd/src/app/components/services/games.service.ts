import { Injectable } from '@angular/core';

import { Game } from '../shared/models/Game';
import { Category } from '../shared/models/Categories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GAMES_BY_CATEGORY_URL, GAMES_BY_ID_URL, GAMES_CATEGORIES_URL, GAMES_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  getAll():Observable <Game[]>{
    return this.http.get<Game[]>(GAMES_URL);
  }
  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(GAMES_CATEGORIES_URL);
  }

  getGamesByCategory(category:string): Observable<Game[]>{
    return category === "All"?
    this.getAll() :
    this.http.get<Game[]>(GAMES_BY_CATEGORY_URL + category);
  }

  getGameById(gameId:number): Observable<Game>{
    return this.http.get<Game>(GAMES_BY_ID_URL + gameId);
  }
}
