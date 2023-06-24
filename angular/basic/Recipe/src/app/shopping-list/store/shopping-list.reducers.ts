import * as ShoppingListActions from "./shopping-list.actions";
import { Ingredient } from "../../shared/ingredient.model";
import { store } from "@angular/core/src/render3/instructions";

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
  editedIngredient: null,
  editedIngredientIndex: null,
};

export function shoppingListReducers(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingrediant,
      };
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;
      console.log(ingredients[state.editedIngredientIndex]);

      return {
        ...state,
        ingredients: ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      let oldIngredient = [...state.ingredients];
      oldIngredient.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredient,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredient = { ...state.ingredients[action.payload] };
      console.log({
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload,
      });
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload,
      };

    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
  return state;
}
