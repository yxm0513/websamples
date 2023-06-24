import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AuthModule } from "./auth/auth.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { CoreModule } from "./core/core.module";
import { shoppingListReducers } from "./shopping-list/store/shopping-list.reducers";
import { reducers } from "./store/app.reducers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule,
    AppRoutingModule,
    AuthRoutingModule,
    StoreModule.forRoot(reducers),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
