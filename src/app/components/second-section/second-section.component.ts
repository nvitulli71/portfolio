import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhoamiComponent } from '../whoami/whoami.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SkillsComponent } from '../skills/skills.component';
import { StatsComponent } from '../stats/stats.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [
    RouterLink,
    WhoamiComponent,
    NavbarComponent,
    StatsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent {}
