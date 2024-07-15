import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'; 
import { RouterOutlet } from '@angular/router';
// import { CarouselModule } from 'primeng/carousel';
 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    TabMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
],// CarouselModule,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  marketingData: any[] = [];
  hrData: any[] = [];
  misData: any[] = [];
  financeData: any[] = [];
  selectedSection: string = 'marketing';

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'Products', icon: 'pi pi-chart-line' },
      { label: 'About Us', icon: 'pi pi-user' },
      { label: 'Our Team', icon: 'pi pi-cog' }
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
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }
}
