import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    PaginatorModule  
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  openURL(url: string) {
    window.open(url, '_blank'); 
}
  cards = [
    { id: 1, title: 'Application 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background1.png' },
    { id: 2, title: 'Application 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background2.png' },
    { id: 3, title: 'Application 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background3.png' },
    { id: 4, title: 'Application 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background4.png' },
    { id: 5, title: 'Application 5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background1.png' },
    { id: 6, title: 'Application 6', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background2.png' },
    { id: 7, title: 'Application 7', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background3.png' },
    { id: 8, title: 'Application 8', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background4.png' },
    { id: 9, title: 'Application 8', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background4.png' },
    { id: 10, title:'Application 8', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!', image: '../assets/background4.png' },
    
  ];
  filteredCards = this.cards;
  searchQuery: string = '';
   
  totalRecords!: number;
  rows: number = 5; 
  first: number = 0;  

  filterCards() {
    this.filteredCards = this.cards.filter(card =>
      card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.totalRecords = this.filteredCards.length;  
  }

  onPageChange(event: any) {
    this.first = event.first;  
  }
}
