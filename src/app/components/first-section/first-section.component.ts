import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [TypewriterComponent, FontAwesomeModule],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
})
export class FirstSectionComponent {
  faArrowDown = faArrowDown;
  typewriterTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'Tech Enthusiast',
    'Leader',
  ];
}
