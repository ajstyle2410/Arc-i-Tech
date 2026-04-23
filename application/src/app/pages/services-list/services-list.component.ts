import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule, ArrowRight, ChevronRight,
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, Trophy
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export class ServicesListComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly ChevronRightIcon = ChevronRight;

  activeCategory = 'all';

  categories = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Development' },
    { id: 'mentorship', label: 'Mentorship & Consulting' },
    { id: 'learning', label: 'Learning & Growth' }
  ];

  serviceCategories = [
    {
      id: 'development',
      name: 'Development Services',
      description: 'End-to-end software solutions built for modern businesses',
      services: [
        {
          id: 'website-development',
          title: 'Website Development',
          description: 'Modern, responsive websites that engage and convert your audience effectively.',
          icon: Globe,
          color: '#6366f1',
          bgColor: 'rgba(99,102,241,0.1)'
        },
        {
          id: 'software-development',
          title: 'Desktop Applications',
          description: 'Powerful cross-platform desktop applications built for performance and scale.',
          icon: Code2,
          color: '#8b5cf6',
          bgColor: 'rgba(139,92,246,0.1)'
        },
        {
          id: 'mobile-apps',
          title: 'Android Applications',
          description: 'Native Android apps providing seamless and intuitive mobile experiences.',
          icon: Smartphone,
          color: '#06b6d4',
          bgColor: 'rgba(6,182,212,0.1)'
        },
        {
          id: 'consulting',
          title: 'Software Consulting',
          description: 'Expert strategic guidance for your technology projects and architecture decisions.',
          icon: BrainCircuit,
          color: '#f59e0b',
          bgColor: 'rgba(245,158,11,0.1)'
        }
      ]
    },
    {
      id: 'mentorship',
      name: 'Mentorship & Consulting',
      description: 'Expert guidance to accelerate your projects and career',
      services: [
        {
          id: 'engineering-projects',
          title: 'Engineering Projects',
          description: 'Full support for final year projects — from idea to implementation.',
          icon: GraduationCap,
          color: '#10b981',
          bgColor: 'rgba(16,185,129,0.1)'
        },
        {
          id: 'mentorship',
          title: 'Project Mentorship',
          description: 'One-on-one mentoring sessions tailored to your project challenges.',
          icon: Lightbulb,
          color: '#f43f5e',
          bgColor: 'rgba(244,63,94,0.1)'
        },
        {
          id: 'interviews',
          title: 'Mock Interviews & Placement',
          description: 'Realistic interview simulations with detailed feedback from industry experts.',
          icon: Users,
          color: '#6366f1',
          bgColor: 'rgba(99,102,241,0.1)'
        }
      ]
    },
    {
      id: 'learning',
      name: 'Learning & Growth',
      description: 'Programs designed to build real skills and real careers',
      services: [
        {
          id: 'internship',
          title: 'Internship Programs',
          description: 'Hands-on internships with real projects, mentors, and completion certificates.',
          icon: ClipboardCheck,
          color: '#8b5cf6',
          bgColor: 'rgba(139,92,246,0.1)'
        },
        {
          id: 'tutoring',
          title: 'Technical Competency Program',
          description: 'Structured curriculum to build in-demand technical skills from the ground up.',
          icon: BookOpen,
          color: '#06b6d4',
          bgColor: 'rgba(6,182,212,0.1)'
        },
        {
          id: 'mock-tests',
          title: 'Mock Tests',
          description: 'Timed assessments with analytics and detailed explanations to improve scores.',
          icon: Trophy,
          color: '#10b981',
          bgColor: 'rgba(16,185,129,0.1)'
        }
      ]
    }
  ];

  get filteredCategories() {
    if (this.activeCategory === 'all') return this.serviceCategories;
    return this.serviceCategories.filter(c => c.id === this.activeCategory);
  }

  setCategory(id: string) {
    this.activeCategory = id;
  }
}
