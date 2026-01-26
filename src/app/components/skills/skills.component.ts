import { Component, OnInit } from '@angular/core';
import { skillsConstants } from '../../shared/constants/skills.constants';
import { interpersonalSkillsConstant } from '../../shared/constants/interpersonal-skills.constants';
import { Skills } from '../../shared/models/skills.interface';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  interpersonalSkills: Skills[] = [];
  faTerminal = faTerminal;

  ngOnInit(): void {
    this.skills = skillsConstants;
    this.interpersonalSkills = interpersonalSkillsConstant;
  }
}
