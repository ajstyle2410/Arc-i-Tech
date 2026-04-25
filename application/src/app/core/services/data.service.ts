import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { from, Observable, of, catchError, map } from 'rxjs';
import {
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, Rocket, ShieldCheck, HeartHandshake, Zap
} from 'lucide-angular';

// Fallback data in case the database tables aren't set up yet
const FALLBACK_STATS = [
  { value: '50+', label: 'Projects Delivered', icon: Rocket },
  { value: '100+', label: 'Happy Clients', icon: HeartHandshake },
  { value: '5+', label: 'Years Experience', icon: ShieldCheck },
  { value: '10', label: 'Expert Services', icon: Zap }
];

const FALLBACK_SERVICES = [
  { id: 'website-development', title: 'Website Development', description: 'Modern, responsive websites that engage and convert your audience.', icon: Globe, color: '#6366f1', bgColor: 'rgba(99,102,241,0.1)' },
  { id: 'software-development', title: 'Desktop Applications', description: 'Powerful cross-platform desktop apps built for performance.', icon: Code2, color: '#8b5cf6', bgColor: 'rgba(139,92,246,0.1)' },
  { id: 'mobile-apps', title: 'Android Applications', description: 'Native Android apps providing seamless mobile experiences.', icon: Smartphone, color: '#06b6d4', bgColor: 'rgba(6,182,212,0.1)' },
  { id: 'consulting', title: 'Software Consulting', description: 'Expert strategic guidance for your technology initiatives.', icon: BrainCircuit, color: '#f59e0b', bgColor: 'rgba(245,158,11,0.1)' },
  { id: 'engineering-projects', title: 'Engineering Projects', description: 'Complete support for final year and academic projects.', icon: GraduationCap, color: '#10b981', bgColor: 'rgba(16,185,129,0.1)' },
  { id: 'mentorship', title: 'Project Mentorship', description: 'One-on-one guidance throughout your entire project journey.', icon: Lightbulb, color: '#f43f5e', bgColor: 'rgba(244,63,94,0.1)' },
  { id: 'interviews', title: 'Mock Interviews', description: 'Realistic interview prep with industry professionals.', icon: Users, color: '#6366f1', bgColor: 'rgba(99,102,241,0.1)' },
  { id: 'internship', title: 'Internship (Certificates)', description: 'Hands-on internships with real projects and certificates.', icon: ClipboardCheck, color: '#8b5cf6', bgColor: 'rgba(139,92,246,0.1)' },
  { id: 'tutoring', title: 'Technical Competency', description: 'Structured programs to build in-demand tech skills.', icon: BookOpen, color: '#06b6d4', bgColor: 'rgba(6,182,212,0.1)' },
  { id: 'mock-tests', title: 'Mock Tests', description: 'Comprehensive tests to assess and sharpen your knowledge.', icon: ClipboardCheck, color: '#10b981', bgColor: 'rgba(16,185,129,0.1)' }
];

const FALLBACK_TESTIMONIALS = [
  { name: 'Priya Sharma', role: 'CEO, FinEdge Pvt Ltd', text: 'Arc-i-Tech transformed our business with a stunning website and mobile app. Their team is professional, responsive, and delivered beyond our expectations.', rating: 5 },
  { name: 'Rahul Mehta', role: 'Final Year Student, VIT', text: 'The project mentorship program was incredibly helpful. My final year project was a huge success thanks to their expert guidance and hands-on support.', rating: 5 },
  { name: 'Anita Desai', role: 'HR Manager, TechCorp', text: 'We hired several interns through Arc-i-Tech\'s program. They came in with solid skills and great work ethics. Highly recommended!', rating: 5 }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Dictionary to map string icon names from DB to Lucide icons
  private iconMap: { [key: string]: any } = {
    'Rocket': Rocket,
    'HeartHandshake': HeartHandshake,
    'ShieldCheck': ShieldCheck,
    'Zap': Zap,
    'Globe': Globe,
    'Code2': Code2,
    'Smartphone': Smartphone,
    'BrainCircuit': BrainCircuit,
    'GraduationCap': GraduationCap,
    'Lightbulb': Lightbulb,
    'Users': Users,
    'ClipboardCheck': ClipboardCheck,
    'BookOpen': BookOpen
  };

  constructor(private supabase: SupabaseService) { }

  getStats(): Observable<any[]> {
    return from(this.supabase.client.from('stats').select('*').order('id', { ascending: true })).pipe(
      map(res => {
        if (res.error || !res.data || res.data.length === 0) {
          return FALLBACK_STATS;
        }
        return res.data.map(stat => ({
          ...stat,
          icon: this.iconMap[stat.icon_name] || Rocket
        }));
      }),
      catchError(() => of(FALLBACK_STATS))
    );
  }

  getServices(): Observable<any[]> {
    return from(this.supabase.client.from('services').select('*').order('display_order', { ascending: true })).pipe(
      map(res => {
        if (res.error || !res.data || res.data.length === 0) {
          return FALLBACK_SERVICES;
        }
        return res.data.map(service => ({
          ...service,
          icon: this.iconMap[service.icon_name] || Code2,
          bgColor: service.bg_color
        }));
      }),
      catchError(() => of(FALLBACK_SERVICES))
    );
  }

  getTestimonials(): Observable<any[]> {
    return from(this.supabase.client.from('testimonials').select('*').order('id', { ascending: true })).pipe(
      map(res => {
        if (res.error || !res.data || res.data.length === 0) {
          return FALLBACK_TESTIMONIALS;
        }
        return res.data;
      }),
      catchError(() => of(FALLBACK_TESTIMONIALS))
    );
  }

  async submitContactForm(name: string, email: string, subject: string, message: string): Promise<boolean> {
    const { error } = await this.supabase.client.from('contact_messages').insert([
      { name, email, subject, message }
    ]);
    if (error) {
      console.error('Error submitting form:', error);
      return false;
    }
    return true;
  }
}
