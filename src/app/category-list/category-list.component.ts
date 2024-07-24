import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

interface App {
  contact: any;
  url: any;
  id: number;
  title: string;
  icon?: string;
  image?: string;
  description?: string;
  team?: string;
  department?: string;
}

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    DialogModule,
    TooltipModule
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  cards: App[] = [
    { id: 1, title: 'Sales', image: '../assets/bar-chart.png', description: 'Sales analysis & insights across all customers and products.', team: 'Hiu lee', department: 'Marketing', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 2, title: 'Inventory', image: '../assets/stock.png', description: 'Full visibility of HGU inventory with insights.', team:'Robert Chuako', department: 'Planning', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi/' },
    { id: 3, title: 'Fill Rate', image: '../assets/fillrate.png', description: 'Order fulfilment status with reasons.', team: 'Robert Chuako', department: 'Planning', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 4, title: 'Customer Profitability', image: '../assets/customerprofitability.png', description: 'Financial analysis by customer.', team: 'Robert Almerini', department: 'Finance', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 5, title: 'Item Profitability', image: '../assets/itemprofitability.png', description: 'Financial analysis by product & fulfilment type.', team: 'Robert Almerini', department: 'Finance', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 6, title: 'Sourcing', image: '../assets/sourcing.png', description: 'One place to visit to see full sourcing lifecycle.', team: 'Denise Meagles', department: 'Sourcing', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 7, title: 'Warehouse KPIs', image: '../assets/warehouse.png', description: 'Operational performance of warehouse.', team: 'Charls Wilkins', department: 'Distribution Center', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 8, title: 'Financial Analytics', image: '../assets/financialanalytics.png', description: 'See HGU Financial Status.', team: 'Joe Naviello', department: 'Finance', contact: undefined, url:'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 9, title: 'SHO', image: '../assets/sho.png', description: 'Shanghai office financial performance.', team: 'Sunny Song', department: 'SHO', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 10, title: 'CMB', image: '../assets/cmb.png', description: 'Colombo office financial performance.', team: 'Renuka Senadheera', department: 'CMB', contact: undefined, url: 'https://app.powerbi.com/browse/shared?experience=power-bi' },
    { id: 11, title: 'DC In & Out Forecast', image: '../assets/inandout.png', description: 'Fully automated warehouse load forecasting.', team: 'Robert Chuako', department: 'Planning', contact: undefined, url:'https://app.powerbi.com/browse/shared?experience=power-bi' },
    
    { id: 12, title: 'IT Project Evaluation', image: '../assets/itprojectevaluation.png', description: 'Standardizing & prioritization of IT projects on ROI.', team: 'Renuka Perera', department: 'IT/MIS', contact: undefined, url: undefined },
    { id: 13, title: 'ILER Demand Forecasting', image: '../assets/ilerdemandforecasting.png', description: 'Full visibility of Walmart replenishment including POS.', team: 'Savannah Mason', department: 'Demand Planning', contact: undefined, url: undefined },
    { id: 14, title: 'Customer Quoting', image: '../assets/customerquoting.png', description: 'Automation of initial costing to customers.', team: 'David Learner', department: 'Sales & Marketing', contact: undefined, url:'http://10.15.1.42:3002' },
    { id: 15, title: 'Product Costing', image: '../assets/productcosting.png', description: 'Fully automated solution for pre-costing (data management).', team: 'Violet Ramiraz', department: 'Data Management', contact: undefined, url: undefined },
    { id: 16, title: 'Program Management', image: '../assets/programmanagement.png', description: 'Real-time system tracking of program management.', team: 'Violet Ramiraz', department: 'Program Management', contact: undefined, url: undefined }
];


  businessIntelligenceApps: App[] = this.cards.slice(0, 11); 
  digitalToolsApps: App[] = this.cards.slice(11); 

  filteredBusinessIntelligenceApps: App[] = [...this.businessIntelligenceApps];
  filteredDigitalToolsApps: App[] = [...this.digitalToolsApps];

  searchQuery: string = '';
  showSearch: boolean = false;
  tooltipStyle: { [key: string]: string | number } = {};

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
      this.filterCards();
    }
  }

  filterCards() {
    const query = this.searchQuery.toLowerCase();
    this.filteredBusinessIntelligenceApps = this.businessIntelligenceApps.filter(app =>
      app.title.toLowerCase().includes(query) || app.description?.toLowerCase().includes(query)
    );
    this.filteredDigitalToolsApps = this.digitalToolsApps.filter(app =>
      app.title.toLowerCase().includes(query) || app.description?.toLowerCase().includes(query)
    );
  }

  showTooltip(event: MouseEvent, app: App) {
    const tooltip = (event.currentTarget as HTMLElement).querySelector('.tooltip-text') as HTMLElement;
    if (tooltip) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const tooltipTop = rect.top + window.scrollY - tooltip.offsetHeight - 10;
      const tooltipLeft = rect.left + (rect.width - tooltip.offsetWidth) / 2;

      tooltip.style.top = `${tooltipTop}px`;
      tooltip.style.left = `${tooltipLeft}px`;
      tooltip.style.opacity = '1';
      tooltip.style.transform = `translateX(-50%) translateY(-10px)`;
    }
  }

  hideTooltip() {
    const tooltips = document.querySelectorAll('.tooltip-text') as NodeListOf<HTMLElement>;
    tooltips.forEach(tooltip => {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateX(-50%) translateY(0)';
    });
  }
  
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
