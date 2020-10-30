import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'test description', 'https://food.fnr.sndimg.com/content/dam/images/food/editorial/international/europe_image.jpg'),
    new Recipe('a test recipe', 'test description', 'https://food.fnr.sndimg.com/content/dam/images/food/editorial/international/europe_image.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
