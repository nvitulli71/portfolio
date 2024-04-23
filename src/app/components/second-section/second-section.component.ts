import { Component } from '@angular/core';
import { WhoamiComponent } from '../whoami/whoami.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [WhoamiComponent, NavbarComponent],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent {}
