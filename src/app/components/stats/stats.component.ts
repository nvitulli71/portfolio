import { Component } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [TerminalComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {}