import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, ChevronRight } from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export class ServicesListComponent implements OnInit, OnDestroy {
  readonly ArrowRightIcon = ArrowRight;
  readonly ChevronRightIcon = ChevronRight;

  activeCategory = 'all';

  categories = [
    { id: 'all', label: 'All Services' },
    { id: 'engineering', label: 'Product Engineering' },
    { id: 'infrastructure', label: 'Cloud & Infrastructure' }
  ];

  /* Dynamically built from DataService */
  serviceCategories: any[] = [];
  private subs = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subs.add(
      this.dataService.getServices().subscribe(services => {
        // Build dynamic categories
        const engServices = services.filter(s => ['saas-incubation', 'enterprise-web', 'mobile-development', 'ux-ui'].includes(s.id));
        const infraServices = services.filter(s => ['cloud-architecture', 'api-integration', 'ai-ml-solutions', 'legacy-modernization'].includes(s.id));
        
        this.serviceCategories = [
          {
            id: 'engineering',
            name: 'Product Engineering & Development',
            description: 'End-to-end custom software solutions engineered for scalability and high performance.',
            services: engServices
          },
          {
            id: 'infrastructure',
            name: 'Cloud, Data & Infrastructure',
            description: 'Robust technical foundations, AI integrations, and cloud migration services.',
            services: infraServices
          }
        ];
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  get filteredCategories() {
    if (this.activeCategory === 'all') return this.serviceCategories;
    return this.serviceCategories.filter(c => c.id === this.activeCategory);
  }

  setCategory(id: string) {
    this.activeCategory = id;
  }
}
