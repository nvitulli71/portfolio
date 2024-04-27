import { Component, OnInit, inject } from '@angular/core';
import { skillsConstants } from '../../shared/constants/skills.constants';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = skillsConstants;
}
