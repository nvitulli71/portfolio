import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  onClickAddActive($event) {
    let clickedElement = $event.target || $event.srcElement;

    let isCertainButtonAlreadyActive =
      clickedElement.parentElement.querySelector('.active');
    // if a Button already has Class: .active
    if (isCertainButtonAlreadyActive) {
      clickedElement.parentElement.previousSibling.classList.remove('active');
      isCertainButtonAlreadyActive.classList.remove('active');
    }

    clickedElement.className += ' active';
  }
}
