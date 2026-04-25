import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { from, Observable, of, catchError, map } from 'rxjs';
import {
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, Rocket, ShieldCheck, HeartHandshake, Zap, Database, Cpu, Server
} from 'lucide-angular';

// Fallback data in case the database tables aren't set up yet
const FALLBACK_STATS = [
  { value: '120+', label: 'Digital Products Launched', icon: Rocket },
  { value: '50+', label: 'Enterprise Clients', icon: HeartHandshake },
  { value: '10+', label: 'Years Engineering', icon: ShieldCheck },
  { value: '99%', label: 'On-Time Delivery', icon: Zap }
];

const FALLBACK_SERVICES = [
  { id: 'saas-incubation', title: 'SaaS Product Incubation', description: 'Transform your vision into a highly scalable SaaS platform. We handle everything from the initial database architecture and multi-tenant logic to front-end development, secure payment gateways, and automated CI/CD deployments. Perfect for startups and enterprises launching new subscription products.', icon: Rocket, color: 'var(--brand-primary)', bgColor: 'rgba(17,45,78,0.1)' },
  { id: 'enterprise-web', title: 'Enterprise Web Apps', description: 'We engineer secure, high-performance web applications tailored to streamline your complex business workflows. Utilizing robust modern frameworks (Angular, React, Spring Boot), we deliver responsive web portals equipped with deep analytics, real-time data sync, and enterprise-grade security.', icon: Globe, color: 'var(--brand-secondary)', bgColor: 'rgba(63,114,175,0.1)' },
  { id: 'mobile-development', title: 'Mobile App Engineering', description: 'Native and cross-platform (Flutter/React Native) mobile experiences engineered for maximum user engagement. We optimize apps for high frame rates, low battery consumption, and seamless offline synchronization so your product excels on both iOS and Android stores.', icon: Smartphone, color: 'var(--brand-accent)', bgColor: 'rgba(219,226,239,0.5)' },
  { id: 'cloud-architecture', title: 'Cloud Architecture & DevOps', description: 'Build a serverless or containerized foundation on AWS, GCP, or Azure. We design fault-tolerant, auto-scaling cloud architectures, coupled with comprehensive Kubernetes and Docker pipelines to ensure zero-downtime deployments and rapid iterative development.', icon: Server, color: 'var(--brand-primary)', bgColor: 'rgba(17,45,78,0.1)' },
  { id: 'ux-ui', title: 'UI/UX Engineering', description: 'Data-driven user experiences and interface designs that decisively increase user retention and conversion. Our design team blends behavioral psychology with crisp, modern aesthetics to deliver intuitive user layouts, interactive prototypes, and comprehensive design systems.', icon: Lightbulb, color: 'var(--brand-secondary)', bgColor: 'rgba(63,114,175,0.1)' },
  { id: 'api-integration', title: 'API & Microservices', description: 'We design robust, RESTful, and GraphQL APIs to seamlessly connect your digital ecosystem. Whether you need to decompose a monolith into scalable microservices or integrate with legacy third-party CRM and ERP databases, we ensure flawless data communication.', icon: Code2, color: 'var(--brand-primary)', bgColor: 'rgba(17,45,78,0.1)' },
  { id: 'ai-ml-solutions', title: 'AI & Data Solutions', description: 'Incorporate intelligent data models into your application. From generative AI integrations, NLP chatbots, to predictive analytics engines, we help you leverage machine learning to automate operations and extract actionable insights from your data warehouse.', icon: BrainCircuit, color: 'var(--brand-secondary)', bgColor: 'rgba(63,114,175,0.1)' },
  { id: 'legacy-modernization', title: 'Legacy Modernization', description: 'Revitalize aging codebases without disrupting active business operations. We safely migrate legacy monolithic architectures into modern cloud-native frameworks, enhancing execution speeds, security posture, and overall maintainability for the future.', icon: Database, color: 'var(--brand-accent)', bgColor: 'rgba(219,226,239,0.5)' }
];

const FALLBACK_TESTIMONIALS = [
  { name: 'Sarah Jenkins', role: 'CTO, OmniTech Solutions', text: 'Arc-i-Tech developed our core SaaS product from scratch. Their engineering rigor and communication throughout the project was outstanding. We hit our launch deadline perfectly.', rating: 5 },
  { name: 'David Chen', role: 'Founder, CloudSync', text: 'The team at Arc-i-Tech doesn\'t just write code; they think about product strategy. They helped us avoid massive technical debt right from the architecture phase.', rating: 5 },
  { name: 'Elena Rodriguez', role: 'VP of Product, FinServe', text: 'We partnered with Arc-i-Tech to modernize our legacy banking portal. The UI/UX overhaul and secure cloud migration completely transformed our customer experience.', rating: 5 }
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
    'Database': Database,
    'Cpu': Cpu,
    'Server': Server
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
