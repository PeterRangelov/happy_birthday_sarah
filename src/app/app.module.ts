import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrosswordComponent } from './crossword/crossword.component';
import { CluesComponent } from './clues/clues.component';
import { SquareComponent } from './square/square.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CrosswordComponent,
    CluesComponent,
    SquareComponent
  ],
	imports: [
		BrowserModule,
		FormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
