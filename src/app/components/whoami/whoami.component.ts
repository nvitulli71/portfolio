import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SkillsComponent } from '../skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-whoami',
  standalone: true,
  imports: [CardComponent, SkillsComponent, FontAwesomeModule],
  templateUrl: './whoami.component.html',
  styleUrl: './whoami.component.scss',
})
export class WhoamiComponent {
  faCode = faCode;
}
