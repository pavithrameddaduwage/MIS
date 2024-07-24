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
      { label: 'About Us', icon: '' },  
      { label: 'Our Team', icon: '' },
      // { label: 'Finance', icon: 'pi pi-money-bill' }
    ];

    this.marketingData = [
      { name: 'Marketing Campaign 1', status: 'In Progress' },
      { name: 'Marketing Campaign 2', status: 'Completed' },
      { name: 'Marketing Campaign 3', status: 'On Hold' }
    ];
    this.hrData = [
      { name: 'HR Onboarding Process', status: 'Active' },
      { name: 'Employee Performance Review', status: 'Upcoming' },
      { name: 'Benefits Administration', status: 'Ongoing' }
    ];
    this.misData = [
      { name: 'System Implementation', status: 'In Progress' },
      { name: 'Data Migration', status: 'Completed' },
      { name: 'IT Support', status: 'Ongoing' }
    ];
    this.financeData = [
      { name: 'Budgeting and Forecasting', status: 'Active' },
      { name: 'Financial Reporting', status: 'Upcoming' },
      { name: 'Risk Management', status: 'Ongoing' }
    ];

    
    // this.carouselImages = [
    //   { src: 'assets/carsole1.jpg', alt: 'Image 1' },
    //   { src: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', alt: 'Image 2' },
    //   { src: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', alt: 'Image 3' }
    // ];

    // this.responsiveOptions = [
    //   {
    //     breakpoint: '1024px',
    //     numVisible: 3,
    //     numScroll: 3
    //   },
    //   {
    //     breakpoint: '768px',
    //     numVisible: 2,
    //     numScroll: 2
    //   },
    //   {
    //     breakpoint: '576px',
    //     numVisible: 1,
    //     numScroll: 1
    //   }
    // ];
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }
}