import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  LucideAngularModule, ArrowLeft, CheckCircle2, Star,
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, Trophy, ArrowRight, Phone
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
    'software-development': {
      id: 'software-development',
      title: 'Desktop Applications',
      tagline: 'Powerful cross-platform applications built for performance',
      fullDescription: 'We develop comprehensive desktop software solutions that solve complex business problems. From simple utilities to enterprise-grade applications, our team builds scalable, maintainable software using modern frameworks.',
      icon: Code2, color: '#6366f1', bgColor: 'rgba(99,102,241,0.1)',
      features: ['Custom application development', 'System architecture design', 'API development & integration', 'Cloud-based solutions', 'Enterprise software', 'Cross-platform (Windows, Mac, Linux)'],
      benefits: ['Tailored to your specific needs', 'Scalable & maintainable codebase', 'Ongoing support & maintenance', 'Cost-effective development', 'Fast performance'],
      ideal: 'Businesses needing powerful offline or enterprise-grade desktop software solutions.'
    },
    'website-development': {
      id: 'website-development',
      title: 'Website Development',
      tagline: 'Modern, responsive websites that drive real business results',
      fullDescription: 'We create stunning, responsive websites that not only look great but also drive business results. From landing pages to full e-commerce platforms, we build experiences that convert visitors into customers.',
      icon: Globe, color: '#8b5cf6', bgColor: 'rgba(139,92,246,0.1)',
      features: ['Responsive web design', 'E-commerce platforms', 'Content management systems', 'SEO optimization', 'Performance optimization', 'Progressive Web Apps (PWA)'],
      benefits: ['Mobile-first design', 'Fast loading times', 'User-friendly interfaces', 'Scalable architecture', 'Improved search rankings'],
      ideal: 'Startups, SMEs, and enterprises wanting a professional, high-performing online presence.'
    },
    'mobile-apps': {
      id: 'mobile-apps',
      title: 'Android Applications',
      tagline: 'Native Android apps that users love',
      fullDescription: 'We build native Android applications that deliver seamless user experiences with excellent performance. From concept to Play Store, we handle the entire mobile development lifecycle.',
      icon: Smartphone, color: '#06b6d4', bgColor: 'rgba(6,182,212,0.1)',
      features: ['Native Android development', 'Cross-platform (Flutter/React Native)', 'App Store deployment', 'Push notifications', 'Offline functionality', 'In-app payments'],
      benefits: ['Native performance', 'Offline functionality', 'Smooth user experience', 'Seamless integrations', 'Play Store optimized'],
      ideal: 'Businesses and startups looking to reach customers on mobile devices.'
    },
    'consulting': {
      id: 'consulting',
      title: 'Software Consulting',
      tagline: 'Expert strategic guidance for your tech initiatives',
      fullDescription: 'Our experienced consultants provide strategic guidance for your technology projects. We assess your current systems, identify improvements, and create a roadmap for scalable, future-proof solutions.',
      icon: BrainCircuit, color: '#f59e0b', bgColor: 'rgba(245,158,11,0.1)',
      features: ['Technology assessment', 'Architecture consulting', 'Best practices guidance', 'Risk analysis', 'Team training', 'Digital transformation roadmap'],
      benefits: ['Expert insights without full-time cost', 'Risk mitigation', 'Optimized tech stack', 'Knowledge transfer', 'Unbiased recommendations'],
      ideal: 'Companies making critical technology decisions or facing complex technical challenges.'
    },
    'engineering-projects': {
      id: 'engineering-projects',
      title: 'Engineering Projects',
      tagline: 'Complete project support from concept to completion',
      fullDescription: 'Complete end-to-end support for engineering and final year projects. We help students and professionals conceptualize, design, implement, and document their projects with expert guidance at every step.',
      icon: GraduationCap, color: '#10b981', bgColor: 'rgba(16,185,129,0.1)',
      features: ['Project ideation & planning', 'Technical implementation', 'Testing & quality assurance', 'Comprehensive documentation', 'Presentation preparation', 'Live demo support'],
      benefits: ['Professional guidance', 'Quality assured deliverables', 'Timely completion', 'Industry-standard practices', 'High grades & recognition'],
      ideal: 'Engineering students needing expert help with final year or semester projects.'
    },
    'mentorship': {
      id: 'mentorship',
      title: 'Project Mentorship',
      tagline: 'One-on-one guidance when you need it most',
      fullDescription: 'Personalized one-on-one mentorship to guide you through your project challenges. Our mentors have real industry experience and know exactly how to unblock you and accelerate your progress.',
      icon: Lightbulb, color: '#f43f5e', bgColor: 'rgba(244,63,94,0.1)',
      features: ['1-on-1 guidance sessions', 'Code reviews & feedback', 'Architecture guidance', 'Debugging & problem solving', 'Best practices training', 'Flexible scheduling'],
      benefits: ['Expert knowledge on demand', 'Personalized learning path', 'Faster skill growth', 'Improved project quality', 'Career clarity'],
      ideal: 'Students, developers, and professionals who want expert guidance for their projects.'
    },
    'interviews': {
      id: 'interviews',
      title: 'Mock Interviews & Placement',
      tagline: 'Land your dream job with confidence',
      fullDescription: 'Realistic mock interview experiences with industry professionals to help you ace your actual interviews. We cover technical rounds, HR rounds, aptitude, and provide detailed actionable feedback.',
      icon: Users, color: '#6366f1', bgColor: 'rgba(99,102,241,0.1)',
      features: ['Technical interview simulations', 'HR round practice', 'Aptitude test preparation', 'Resume & LinkedIn review', 'Detailed performance feedback', 'Placement guidance'],
      benefits: ['Build confidence', 'Identify weak areas early', 'Improve communication skills', 'Better job placement odds', 'Industry-aligned preparation'],
      ideal: 'Students and professionals preparing for technical interviews at top companies.'
    },
    'internship': {
      id: 'internship',
      title: 'Internship Programs',
      tagline: 'Real experience, real certificates, real impact',
      fullDescription: 'Structured internship programs that provide genuine hands-on experience with real projects. Interns work alongside experienced professionals, gaining skills that employers actually value.',
      icon: ClipboardCheck, color: '#8b5cf6', bgColor: 'rgba(139,92,246,0.1)',
      features: ['Hands-on project work', 'Dedicated mentor per intern', 'Industry exposure', 'Completion certificate', 'Portfolio building projects', 'Professional networking'],
      benefits: ['Real-world experience', 'Strong portfolio additions', 'Networking opportunities', 'Career direction clarity', 'Letter of recommendation'],
      ideal: 'Students and fresh graduates looking for meaningful work experience and industry exposure.'
    },
    'tutoring': {
      id: 'tutoring',
      title: 'Technical Competency Program',
      tagline: 'Build skills that employers are hiring for right now',
      fullDescription: 'Comprehensive structured programs designed to build professional-grade technical competencies. Learn from expert practitioner-instructors who have worked at top companies.',
      icon: BookOpen, color: '#06b6d4', bgColor: 'rgba(6,182,212,0.1)',
      features: ['Structured curriculum', 'Hands-on projects', 'Expert practitioner trainers', 'Flexible scheduling', 'Lifetime access to materials', 'Live doubt sessions'],
      benefits: ['Enhanced technical skillset', 'Industry-relevant knowledge', 'Certification on completion', 'Career advancement', 'Practical project experience'],
      ideal: 'Anyone wanting to upskill or transition into a technical role in the software industry.'
    },
    'mock-tests': {
      id: 'mock-tests',
      title: 'Mock Tests',
      tagline: 'Assess, improve, and ace your exams',
      fullDescription: 'Comprehensive timed test series to evaluate your preparation level and identify areas for improvement. Detailed analytics help you understand your strengths and focus your study efforts.',
      icon: Trophy, color: '#10b981', bgColor: 'rgba(16,185,129,0.1)',
      features: ['Multiple difficulty levels', 'Detailed explanations', 'Performance analytics dashboard', 'Timed assessments', 'Topic-wise analysis', 'Progress tracking over time'],
      benefits: ['Accurate self-assessment', 'Clear progress visibility', 'Improved test scores', 'Confidence building', 'Time management practice'],
      ideal: 'Students preparing for competitive exams, placements, or technical assessments.'
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
