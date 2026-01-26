import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [TypewriterComponent, FontAwesomeModule],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
})
export class FirstSectionComponent implements AfterViewInit {
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('typewriter') typewriter!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  faArrowDown = faArrowDown;
  typewriterTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'Technical Lead',
    'Tech Enthusiast',
    'Learner',
    'Leader',
  ];

  ngAfterViewInit(): void {
    this.animateEntrance();
    this.createParticles();
  }

  private animateEntrance(): void {
    gsap
      .timeline({ defaults: { clearProps: 'all' } })
      .from(this.logo.nativeElement, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(
        this.typewriter.nativeElement,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3',
      )
      .from(
        this.ctaButton.nativeElement,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          onComplete: () => {
            this.ctaButton.nativeElement.style.opacity = '1';
          },
        },
        '-=0.3',
      );
  }

  private createParticles(): void {
    const section = document.querySelector('.first-section') as HTMLElement;
    if (!section) return;

    const particleCount = 100;
    const particles: HTMLElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 10;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--accent-blue);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        opacity: ${Math.random() * 0.3 + 0.1};
        z-index: 0;
        pointer-events: none;
      `;

      section.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        y: -window.innerHeight,
        x: (Math.random() - 0.5) * 200,
        duration: duration,
        repeat: -1,
        delay: Math.random() * 10,
        ease: 'none',
      });
    }
  }
}
