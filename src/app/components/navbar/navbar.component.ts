import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onClickAddActive($event: Event): void {
    let clickedElement = $event.target as HTMLElement;

    let isCertainButtonAlreadyActive = clickedElement.parentElement?.querySelector('.active');
    
    if (isCertainButtonAlreadyActive) {
      clickedElement.parentElement?.previousElementSibling?.classList.remove('active');
      isCertainButtonAlreadyActive.classList.remove('active');
    }

    clickedElement.classList.add('active');
  }
}
