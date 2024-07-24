import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
 
import { CategoryListComponent } from './category-list/category-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent ,pathMatch: 'full'},
  { path: 'category', component: CategoryListComponent , pathMatch: 'full'},
  
 
];

 
 

