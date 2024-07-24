import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
 
import { CategoryListComponent } from './category-list/category-list.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent ,pathMatch: 'full'},
  { path: 'category', component: CategoryListComponent , pathMatch: 'full'},
  { path: 'team', component:TeamComponent,pathMatch: 'full'},
  
 
];

 
 

