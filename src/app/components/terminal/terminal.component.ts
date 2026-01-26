import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
  title = input<string>('terminal');
  maxWidth = input<string | number>('800px');
  centered = input<boolean>(true);
}
