import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, ArrowRight,
  Star, Rocket, ShieldCheck, HeartHandshake, Zap, ChevronRight
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly ChevronRightIcon = ChevronRight;
  readonly RocketIcon = Rocket;
  readonly StarIcon = Star;

  stats = [
    { value: '50+', label: 'Projects Delivered', icon: Rocket },
    { value: '100+', label: 'Happy Clients', icon: HeartHandshake },
    { value: '5+', label: 'Years Experience', icon: ShieldCheck },
    { value: '10', label: 'Expert Services', icon: Zap }
  ];

  services = [
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'Modern, responsive websites that engage and convert your audience.',
      icon: Globe,
      color: '#6366f1',
      bgColor: 'rgba(99,102,241,0.1)'
    },
    {
      id: 'software-development',
      title: 'Desktop Applications',
      description: 'Powerful cross-platform desktop apps built for performance.',
      icon: Code2,
      color: '#8b5cf6',
      bgColor: 'rgba(139,92,246,0.1)'
    },
    {
      id: 'mobile-apps',
      title: 'Android Applications',
      description: 'Native Android apps providing seamless mobile experiences.',
      icon: Smartphone,
      color: '#06b6d4',
      bgColor: 'rgba(6,182,212,0.1)'
    },
    {
      id: 'consulting',
      title: 'Software Consulting',
      description: 'Expert strategic guidance for your technology initiatives.',
      icon: BrainCircuit,
      color: '#f59e0b',
      bgColor: 'rgba(245,158,11,0.1)'
    },
    {
      id: 'engineering-projects',
      title: 'Engineering Projects',
      description: 'Complete support for final year and academic projects.',
      icon: GraduationCap,
      color: '#10b981',
      bgColor: 'rgba(16,185,129,0.1)'
    },
    {
      id: 'mentorship',
      title: 'Project Mentorship',
      description: 'One-on-one guidance throughout your entire project journey.',
      icon: Lightbulb,
      color: '#f43f5e',
      bgColor: 'rgba(244,63,94,0.1)'
    },
    {
      id: 'interviews',
      title: 'Mock Interviews',
      description: 'Realistic interview prep with industry professionals.',
      icon: Users,
      color: '#6366f1',
      bgColor: 'rgba(99,102,241,0.1)'
    },
    {
      id: 'internship',
      title: 'Internship (Certificates)',
      description: 'Hands-on internships with real projects and certificates.',
      icon: ClipboardCheck,
      color: '#8b5cf6',
      bgColor: 'rgba(139,92,246,0.1)'
    },
    {
      id: 'tutoring',
      title: 'Technical Competency',
      description: 'Structured programs to build in-demand tech skills.',
      icon: BookOpen,
      color: '#06b6d4',
      bgColor: 'rgba(6,182,212,0.1)'
    },
    {
      id: 'mock-tests',
      title: 'Mock Tests',
      description: 'Comprehensive tests to assess and sharpen your knowledge.',
      icon: ClipboardCheck,
      color: '#10b981',
      bgColor: 'rgba(16,185,129,0.1)'
    }
  ];

  testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CEO, FinEdge Pvt Ltd',
      text: 'Arc-i-Tech transformed our business with a stunning website and mobile app. Their team is professional, responsive, and delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      role: 'Final Year Student, VIT',
      text: 'The project mentorship program was incredibly helpful. My final year project was a huge success thanks to their expert guidance and hands-on support.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'HR Manager, TechCorp',
      text: 'We hired several interns through Arc-i-Tech\'s program. They came in with solid skills and great work ethics. Highly recommended!',
      rating: 5
    }
  ];
}
