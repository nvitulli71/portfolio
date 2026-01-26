import { Component } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TerminalComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}