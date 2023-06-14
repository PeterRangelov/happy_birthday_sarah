import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { UntilDestroy } from "@ngneat/until-destroy";
import { tap } from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrosswordComponent implements OnInit, AfterViewInit {
  @ViewChildren(SquareComponent) squares: QueryList<SquareComponent>;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.squares.changes
      .pipe(
        tap(console.log)
      )
      .subscribe();

    this.squares.forEach(square => {
      square.correct.subscribe(
        _ => {
          if (this.allCorrect()) {
            console.log('GOTEM')
          }
        }
      )
    })


  }

  allCorrect(): boolean {
    return this.squares
      .filter(square => square.correctLetter)
      .every(square => square.correctGuess());

  }


}
