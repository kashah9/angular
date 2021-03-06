import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Strawberries dish',
    'https://www.publicdomainpictures.net/pictures/250000/nahled/sliced-strawberries-on-plate.jpg'),
    new Recipe('A Sample Dish', 'Strawberries dish',
      'https://www.publicdomainpictures.net/pictures/250000/nahled/sliced-strawberries-on-plate.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
