import { Component } from '@angular/core';
import { WhoamiComponent } from '../whoami/whoami.component';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [WhoamiComponent],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent {}
