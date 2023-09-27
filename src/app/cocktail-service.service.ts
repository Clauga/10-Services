import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  private cocktails: Cocktail[] = [
    {
    name: 'Pisco Sour',
    price: 8,
    picture: 'https://plus.unsplash.com/premium_photo-1671647122569-8bd4cd93af73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
  },
  {
    name: 'Lillet Rosé',
    price: 10,
    picture: 'https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
  },
  {
    name: 'Spritz',
    price: 8,
    picture: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  },

  ];

  constructor() { }

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
