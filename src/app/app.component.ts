import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstSectionComponent,
    SecondSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
