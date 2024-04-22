import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
})
export class FirstSectionComponent {
  typewriterTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'Tech Enthusiast',
    'Leader',
  ];
}
