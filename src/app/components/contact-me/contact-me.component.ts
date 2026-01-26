import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPaperPlane,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, TerminalComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  readonly faGithub = faGithub;
  readonly faLinkedin = faLinkedin;
  readonly faEnvelope = faEnvelope;
  readonly faPaperPlane = faPaperPlane;
  readonly faCheckCircle = faCheckCircle;
  readonly faExclamationCircle = faExclamationCircle;
  readonly faMedium = faMedium;
}
