// Lab 3: Component-Template-CSS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { NgforandngifComponent } from './ngforandngif/ngforandngif.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { TopBannerComponent } from './home/topbanner/topbanner.component';
import { CategoryMenuComponent } from './home/categorymenu/categorymenu.component';
import { SearchBarComponent } from './home/navbar/searchbar/searchbar.component';
import { ToDoListComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    NgforandngifComponent,
    Lab4Component,
    NavbarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
