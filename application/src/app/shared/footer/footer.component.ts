import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Hexagon, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly HexagonIcon = Hexagon;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcon = MapPin;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly TwitterIcon = Twitter;

  currentYear = new Date().getFullYear();
}
