import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { TypewriterService } from '../../services/typewriter/typewriter.service';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypewriterComponent implements OnInit {
  private typewriterService = inject(TypewriterService);

  titles = input.required<string[]>();

  typedText$: Observable<string> = new Observable<string>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.typedText$ = this.typewriterService
      .getTypewriterEffect(this.titles())
      .pipe(map((text) => text));
  }
}
