import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstSectionComponent, SecondSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
