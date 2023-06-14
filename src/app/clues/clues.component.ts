import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Clue, Direction } from "./clue.model";
import clues from "./../../assets/clues.json";

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CluesComponent {
  readonly clues: Clue[] = (clues as Clue[])
    .sort((c1, c2) => {
      return c1.idx > c2.idx ? 1 : -1;
    });

  getAcross(): Clue[] {
    return this.clues
      .filter(clue => clue.direction === Direction.ACROSS);
  }

  getDown(): Clue[] {
    return this.clues
      .filter(clue => clue.direction === Direction.DOWN);
  }
}
