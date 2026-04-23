import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule, Zap, Heart, MessageCircle, Users,
  Rocket, Headset, Target, Award, Clock, TrendingUp, ArrowRight, Phone
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly ZapIcon = Zap;
  readonly HeartIcon = Heart;
  readonly MessageCircleIcon = MessageCircle;
  readonly UsersIcon = Users;
  readonly RocketIcon = Rocket;
  readonly HeadsetIcon = Headset;
  readonly TargetIcon = Target;
  readonly AwardIcon = Award;
  readonly ClockIcon = Clock;
  readonly TrendingUpIcon = TrendingUp;
  readonly ArrowRightIcon = ArrowRight;
  readonly PhoneIcon = Phone;

  values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly seek new and better ways to solve problems, embracing the latest technologies.',
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.1)'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Excellence is not an option; it\'s our standard in every line of code and every deliverable.',
      color: '#f43f5e',
      bg: 'rgba(244,63,94,0.1)'
    },
    {
      icon: MessageCircle,
      title: 'Transparency',
      description: 'Open communication and total honesty are the foundation of every client relationship.',
      color: '#06b6d4',
      bg: 'rgba(6,182,212,0.1)'
    },
    {
      icon: Users,
      title: 'Dedication',
      description: 'We are fully committed to your success and walk with you at every step of the journey.',
      color: '#10b981',
      bg: 'rgba(16,185,129,0.1)'
    }
  ];

  milestones = [
    { year: '2019', title: 'Founded', description: 'Arc-i-Tech was founded with a vision to democratize tech services.' },
    { year: '2020', title: 'First 10 Clients', description: 'Delivered our first 10 successful projects across web and mobile.' },
    { year: '2021', title: 'Education Wing Launched', description: 'Launched mentorship and internship programs for students.' },
    { year: '2022', title: '50+ Projects', description: 'Crossed 50 successfully delivered projects with 100% client satisfaction.' },
    { year: '2024', title: '100+ Clients', description: 'Grew to serve 100+ clients across India and internationally.' }
  ];

  team = [
    { name: 'Ajay Deshmukh', role: 'Founder & CEO', initials: 'AD', color: '#6366f1' },
    { name: 'Priya Talekar', role: 'Lead Developer', initials: 'PT', color: '#8b5cf6' },
    { name: 'Rohan Kulkarni', role: 'Tech Consultant', initials: 'RK', color: '#06b6d4' },
    { name: 'Sneha Patil', role: 'Mentorship Head', initials: 'SP', color: '#10b981' }
  ];

  stats = [
    { value: '50+', label: 'Projects Delivered', icon: Rocket },
    { value: '100+', label: 'Happy Clients', icon: Award },
    { value: '5+', label: 'Years Experience', icon: Clock },
    { value: '95%', label: 'Client Satisfaction', icon: TrendingUp }
  ];
}
