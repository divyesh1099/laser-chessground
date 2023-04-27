import { Component, ViewChild } from '@angular/core';
import {NgxChessBoardService } from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  @ViewChild('board', { static: false })
  board!: NgxChessBoardService;
  constructor(private ngxChessBoardService: NgxChessBoardService) { }
  title = 'laser-chessground';
  reset() {
    this.board.reset();
  }
  getPGN(){
    var pgn = this.board.getPGN();
    console.log(pgn);
    let output: HTMLElement = document.getElementById('output')!;
    output.innerHTML = pgn;
  }
}
