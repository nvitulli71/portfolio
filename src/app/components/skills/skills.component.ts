import { Component, OnInit } from '@angular/core';
import { skillsConstants } from '../../shared/constants/skills.constants';
import { CardComponent } from '../card/card.component';
import { interpersonalSkillsConstant } from '../../shared/constants/interpersonal-skills.constants';
import { Skills } from '../../shared/models/skills.interface';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  interpersonalSkills: Skills[][] = [];
  numberOfColumns = 3;
  faTerminal = faTerminal;

  ngOnInit(): void {
    this.skills = skillsConstants;
    this.interpersonalSkills = this.getSkillsColumns(
      interpersonalSkillsConstant,
      this.numberOfColumns
    );
  }

  getSkillsColumns(skills: Skills[], numberOfColumns: number) {
    const columns: Skills[][] = [];
    let currentColumn: Skills[] = [];
    let skillsPerColumn = Math.ceil(skills.length / numberOfColumns);
    for (let i = 0; i < skills.length; i++) {
      currentColumn.push(skills[i]);

      if (currentColumn.length === skillsPerColumn || i === skills.length - 1) {
        columns.push(currentColumn);
        currentColumn = [];
      }
    }
    return columns;
  }
}
