import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule, MapPin, Mail, Phone,
  Clock, CheckCircle2, Send, MessageSquare
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly MapPinIcon = MapPin;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly ClockIcon = Clock;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly SendIcon = Send;
  readonly MessageSquareIcon = MessageSquare;

  services = [
    'Website Development',
    'Desktop Applications',
    'Android Applications',
    'Software Consulting',
    'Engineering Projects',
    'Project Mentorship',
    'Mock Interviews / Placement',
    'Internship Programs',
    'Technical Competency Program',
    'Mock Tests',
    'Other / General Inquiry'
  ];

  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  submitted = false;
  isLoading = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.submitted = true;
        setTimeout(() => {
          this.formData = { name: '', email: '', phone: '', service: '', message: '' };
          this.submitted = false;
        }, 4000);
      }, 1000);
    }
  }
}
