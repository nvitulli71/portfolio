import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
  OnDestroy,
} from '@angular/core';

export type AnimationType = 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollAnimation') animationType: AnimationType = 'fade-in';
  @Input() delay = 0;
  @Input() duration = 0.6;

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.element.nativeElement, `scroll-${this.animationType}`);
    this.renderer.setStyle(this.element.nativeElement, 'transition-delay', `${this.delay}s`);
    this.renderer.setStyle(this.element.nativeElement, 'transition-duration', `${this.duration}s`);
    this.setupObserver();
  }

  private setupObserver() {
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.renderer.addClass(entry.target, 'animate');
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}