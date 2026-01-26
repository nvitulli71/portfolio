import { Component } from '@angular/core';
import { FirstSectionComponent } from '../first-section/first-section.component';
import { SecondSectionComponent } from '../second-section/second-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FirstSectionComponent, SecondSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
