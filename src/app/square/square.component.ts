import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  private readonly pattern: RegExp = /^[A-Za-z]+$/;
  @Input() wordNumber: string;
  @Input() letter: string;
  @Input() correctLetter: string;
  @Output() correct = new EventEmitter<void>();

  toUppercase(letter: string) {
    this.letter = letter.toUpperCase();

    if (this.correctGuess()) {
      this.correct.emit();
    }

  }

  correctGuess(): boolean {
    return this.correctLetter !== undefined && this.letter === this.correctLetter;
  }


}
