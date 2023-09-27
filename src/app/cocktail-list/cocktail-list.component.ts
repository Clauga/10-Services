import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { Cocktail } from '../cocktail.model';



@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
cocktails: Cocktail[] = [];

constructor(private cocktailService: CocktailServiceService) { }

ngOnInit(): void {
  this.cocktails = this.cocktailService.getCocktails();
}
}
