import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    const collapseMenu = document.getElementById('navbarTogglerDemo02');
    if (collapseMenu) {
      const dropdownLinks = document.querySelectorAll('.nav-link');
      dropdownLinks.forEach((link) => {
        link.addEventListener('click', function () {
          collapseMenu.classList.remove('show');
        });
      });
    }
  }

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
