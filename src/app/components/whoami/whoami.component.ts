import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-whoami',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './whoami.component.html',
  styleUrl: './whoami.component.scss',
})
export class WhoamiComponent {}
