import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhoamiComponent } from './components/whoami/whoami.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstSectionComponent,
    SecondSectionComponent,
    FooterComponent,
    NavbarComponent,
    WhoamiComponent,
    SkillsComponent,
    ContactMeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
