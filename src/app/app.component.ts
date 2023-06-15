import { Component } from '@angular/core';
import * as confetti from 'canvas-confetti';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  completed$ = new BehaviorSubject<boolean>(false);

  rainConfetti() {
    this.completed$.next(true);
    const confettiCanvas = document.getElementById('canvas')
    // @ts-ignore
    confetti.create(confettiCanvas)({
      shapes: ['square'],
      particleCount: 2500,
    }).then(res => this.completed$.next(false));

  }
}
