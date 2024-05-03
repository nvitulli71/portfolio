import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelop = faEnvelope;
  faBounce = `fa-bounce`;

  addAttribute(event): void {
    event.target.className += 'fa-bounce';
  }

  removeAttribute(event): void {
    event.target.className = event.target.className.replace('fa-bounce', '');
  }
}
