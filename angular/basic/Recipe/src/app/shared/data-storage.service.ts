import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import "rxjs/Rx";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(
      "https://ng-http-39b2c.firebaseio.com/recipes.json?auth=" + token,
      this.recipeService.getRecipes(),
      {
        //observe: "events"
        observe: "body",
        headers: new HttpHeaders().set(
          "Authorization",
          "Beared sdjflksdjflksjlkfdjflkj"
        ),
      }
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    return (
      this.httpClient
        // .get<Recipe[]>(
        //   "https://ng-http-39b2c.firebaseio.com/recipes.json?auth=" + token
        // )
        .get<Recipe[]>(
          "https://ng-http-39b2c.firebaseio.com/recipes.json?auth=" + token,
          { observe: "body", responseType: "json" }
        )
        .map((recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              console.log(recipe);
              recipes["ingredients"] = [];
            }
          }
          return recipes;
        })
        .subscribe((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
    );
  }
}
