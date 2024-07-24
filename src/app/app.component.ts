import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'; 
// import { CarouselModule } from 'primeng/carousel';
import { CategoryListComponent } from "./category-list/category-list.component";
import { MenubarModule } from 'primeng/menubar';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TabMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    // CarouselModule,
    CategoryListComponent,
    MenubarModule
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
  items: MenuItem[] = [];
  marketingData: any[] = []; 
  hrData: any[] = []; 
  misData: any[] = [];  
  financeData: any[] = [];  
  selectedSection: string = 'marketing'; 

   
  // carouselImages: any[] = [];
  responsiveOptions!: any[];

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: '', routerLink: ['/home'] },
      { label: 'Products', icon: '',routerLink: ['/category'] },
      { label: 'About Us', icon: ''},  
      { label: 'Our Team', icon: ''},
      // { label: 'Our Team', icon: '',routerLink: ['/team'] },
      // { label: 'Finance', icon: 'pi pi-money-bill' }
    ];
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }
}