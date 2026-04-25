import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  ArrowRight, ChevronRight, Rocket, Star
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly ArrowRightIcon = ArrowRight;
  readonly ChevronRightIcon = ChevronRight;
  readonly RocketIcon = Rocket;
  readonly StarIcon = Star;

  stats: any[] = [];
  services: any[] = [];
  testimonials: any[] = [];

  private subs = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subs.add(this.dataService.getStats().subscribe(data => this.stats = data));
    this.subs.add(this.dataService.getServices().subscribe(data => this.services = data));
    this.subs.add(this.dataService.getTestimonials().subscribe(data => this.testimonials = data));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

