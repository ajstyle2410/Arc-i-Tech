import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  LucideAngularModule, ArrowLeft, CheckCircle2, Star,
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, Trophy, ArrowRight, Phone, Rocket, Server, Database
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  fullDescription: string;
  icon: any;
  color: string;
  bgColor: string;
  features: string[];
  benefits: string[];
  ideal: string;
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  readonly ArrowLeftIcon = ArrowLeft;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly StarIcon = Star;
  readonly ArrowRightIcon = ArrowRight;
  readonly PhoneIcon = Phone;

  serviceId: string = '';
  service: ServiceDetail | null = null;

  services: Record<string, ServiceDetail> = {
    'saas-incubation': {
      id: 'saas-incubation',
      title: 'SaaS Product Incubation',
      tagline: 'Transform your vision into a highly scalable SaaS platform.',
      fullDescription: 'We handle everything from the initial database architecture and multi-tenant logic to front-end development, secure payment gateways, and automated CI/CD deployments. Perfect for startups and enterprises launching new subscription products.',
      icon: Rocket, color: 'var(--brand-primary)', bgColor: 'rgba(17,45,78,0.1)',
      features: ['Multi-tenant architecture design', 'Scalable database modeling', 'Stripe/Braintree subscription integration', 'User role & permission management', 'Automated CI/CD pipelines', 'White-labeling capabilities'],
      benefits: ['Rapid time-to-market', 'Highly scalable foundation', 'Predictable development costs', 'Enterprise-grade security natively', 'Seamless user onboarding'],
      ideal: 'Funded startups and enterprise innovation labs looking to launch subscription-based software.'
    },
    'enterprise-web': {
      id: 'enterprise-web',
      title: 'Enterprise Web Apps',
      tagline: 'Secure, high-performance web applications built for complexity.',
      fullDescription: 'We engineer secure, high-performance web applications tailored to streamline your complex business workflows. Utilizing robust modern frameworks (Angular, React, Spring Boot), we deliver responsive web portals equipped with deep analytics, real-time data sync, and enterprise-grade security.',
      icon: Globe, color: 'var(--brand-secondary)', bgColor: 'rgba(63,114,175,0.1)',
      features: ['Custom workflow automation', 'Deep ERP/CRM data integration', 'Real-time analytics dashboards', 'Role-based access control (RBAC)', 'SSO & Active Directory integration', 'High-availability infrastructure'],
      benefits: ['Eliminate manual operational bottlenecks', 'Enhance data visibility & accuracy', 'Reduce long-term licensing costs', 'Secure, highly available deployment', 'Tailored exactly to your business logic'],
      ideal: 'Mid-to-large cap enterprises needing bespoke internal tooling or client-facing portals.'
    },
    'mobile-development': {
      id: 'mobile-development',
      title: 'Mobile App Engineering',
      tagline: 'Native and cross-platform mobile experiences that engage.',
      fullDescription: 'Native and cross-platform (Flutter/React Native) mobile experiences engineered for maximum user engagement. We optimize apps for high frame rates, low battery consumption, and seamless offline synchronization so your product excels on both iOS and Android stores.',
      icon: Smartphone, color: 'var(--brand-accent)', bgColor: 'rgba(219,226,239,0.5)',
      features: ['Cross-platform (Flutter/React Native)', 'Native iOS (Swift) & Android (Kotlin)', 'Offline-first data synchronization', 'Advanced push notification campaigns', 'Hardware & sensor integration', 'App Store & Google Play deployment'],
      benefits: ['Unified codebase for faster iteration', 'Fluid 60FPS animations', 'Robust offline capabilities', 'Higher user retention rates', 'Rapid feature deployments'],
      ideal: 'Companies wanting to capture the mobile market with high-performance consumer or B2B apps.'
    },
    'cloud-architecture': {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & DevOps',
      tagline: 'Robust, auto-scaling foundations for zero-downtime applications.',
      fullDescription: 'Build a serverless or containerized foundation on AWS, GCP, or Azure. We design fault-tolerant, auto-scaling cloud architectures, coupled with comprehensive Kubernetes and Docker pipelines to ensure zero-downtime deployments and rapid iterative development.',
      icon: Server, color: 'var(--brand-primary)', bgColor: 'rgba(17,45,78,0.1)',
      features: ['AWS / GCP / Azure migrations', 'Kubernetes & Docker orchestration', 'Serverless computing setups', 'Infrastructure as Code (Terraform)', '24/7 monitoring & alerting', 'Automated security patching'],
      benefits: ['Zero-downtime deployments', 'Auto-scaling during traffic spikes', 'Reduced server overhead costs', 'Disaster recovery guarantees', 'Accelerated developer velocity'],
      ideal: 'Products experiencing rapid growth that require industrial-grade reliability and scalability.'
    },
    'ux-ui': {
      id: 'ux-ui',
      title: 'UI/UX Engineering',
      tagline: 'Data-driven designs that decisively increase user conversion.',
      fullDescription: 'Data-driven user experiences and interface designs that decisively increase user retention and conversion. Our design team blends behavioral psychology with crisp, modern aesthetics to deliver intuitive user layouts, interactive prototypes, and comprehensive design systems.',
      icon: Lightbulb, color: 'var(--brand-secondary)', bgColor: 'rgba(63,114,175,0.1)',
      features: ['Comprehensive user research', 'Wireframing & interactive prototyping', 'Behavioral flow analysis', 'Custom design system creation', 'Accessibility (WCAG) compliance', 'Micro-interaction animations'],
      benefits: ['Higher user conversion rates', 'Lower customer support volume', 'Consistent brand identity', 'Accessible to all users', 'Faster subsequent visual updates'],
      ideal: 'Software products suffering from high churn rates or complex, unintuitive workflows.'
    },
    'api-integration': {
      id: 'api-integration',
      title: 'API & Microservices',
      tagline: 'Seamlessly connect your digital ecosystem.',
      fullDescription: 'We design robust, RESTful, and GraphQL APIs to seamlessly connect your digital ecosystem. Whether you need to decompose a monolith into scalable microservices or integrate with legacy third-party CRM and ERP databases, we ensure flawless data communication.',
      icon: Code2, color: 'var(--brand-primary)', bgColor: 'rgba(17,45,78,0.1)',
      features: ['RESTful & GraphQL API development', 'Monolith to microservice decomposition', 'Third-party (Stripe, Twilio, Salesforce) integration', 'API Gateway & load balancing', 'Secure API authentication (OAuth2/JWT)', 'Extensive API documentation'],
      benefits: ['Decoupled, scalable systems', 'Easier integration for future partners', 'Faster parallel development', 'Enhanced platform security', 'Reliable data synchronization'],
      ideal: 'Companies trapped by monolithic codebases or needing deep integration with external platforms.'
    },
    'ai-ml-solutions': {
      id: 'ai-ml-solutions',
      title: 'AI & Data Solutions',
      tagline: 'Intelligent automation to extract actionable insights.',
      fullDescription: 'Incorporate intelligent data models into your application. From generative AI integrations, NLP chatbots, to predictive analytics engines, we help you leverage machine learning to automate operations and extract actionable insights from your data warehouse.',
      icon: BrainCircuit, color: 'var(--brand-secondary)', bgColor: 'rgba(63,114,175,0.1)',
      features: ['LLM & generative AI integration', 'Natural Language Processing (NLP)', 'Predictive analytics modeling', 'Automated data pipelines', 'Custom recommendation engines', 'Computer vision integration'],
      benefits: ['Automated customer support', 'Data-driven decision making', 'Highly personalized user experiences', 'Reduced manual operational workloads', 'Uncovered revenue opportunities'],
      ideal: 'Data-rich businesses seeking to automate manual workflows or provide intelligent user features.'
    },
    'legacy-modernization': {
      id: 'legacy-modernization',
      title: 'Legacy Modernization',
      tagline: 'Revitalize aging codebases without disrupting business.',
      fullDescription: 'Revitalize aging codebases without disrupting active business operations. We safely migrate legacy monolithic architectures into modern cloud-native frameworks, enhancing execution speeds, security posture, and overall maintainability for the future.',
      icon: Database, color: 'var(--brand-accent)', bgColor: 'rgba(219,226,239,0.5)',
      features: ['Strangler fig migration pattern', 'Codebase refactoring & cleanup', 'Legacy database migration', 'Automated testing implementation', 'Cloud-native framework adoption', 'Security vulnerability patching'],
      benefits: ['Zero disruption to critical operations', 'Elimination of technical debt', 'Faster future feature development', 'Restored security compliance', 'Happier engineering teams'],
      ideal: 'Established enterprises reliant on outdated, hard-to-maintain software systems.'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.service = this.services[this.serviceId] || null;
    });
  }
}
