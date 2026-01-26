import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-whoami',
  standalone: true,
  imports: [FontAwesomeModule, StatsComponent],
  templateUrl: './whoami.component.html',
  styleUrl: './whoami.component.scss',
})
export class WhoamiComponent {
  faCode = faCode;
}
