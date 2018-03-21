import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ProfileComponent } from './shared/profile.component'; // Accessing user service to print data
import { HttpModule } from '@angular/http'; // To handle Http service in Angular 2.0
import { UserService } from './shared/user.service'; // service provider
import { HttpClientModule } from '@angular/common/http'; // Angular 4.3.x and above
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormComponent } from './shared/form.component';
import { testformComponent } from './shared/testform.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    ProfileComponent,
    FormComponent, 
    testformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService], // DO NOT forget to include service provider
  bootstrap: [AppComponent]
})
export class AppModule { }
