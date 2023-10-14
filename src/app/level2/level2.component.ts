import { Component } from '@angular/core';
import { BoardContent } from '../enums/BoardContent';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})

export class Level2Component {
  private currentPlayerIndex!: number;
  private currentWinnerIndex!: number;
  private playerNames: string[];
  public boardContent!: number[][];

  constructor() {
    this.playerNames = ['', 'X', 'O'];
    this.onRestart();
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[col][row]];
  }

  public set(col: number, row: number): void {
    if (this.currentWinnerIndex === 0 && this.boardContent[col][row] === BoardContent.EMPTY) {
      this.boardContent[col][row] = this.currentPlayerIndex;
      this.currentPlayerIndex = this.currentPlayerIndex === BoardContent.X ? BoardContent.O : BoardContent.X;
    }
  }

  public getStyle(col: number, row: number): string {
    return `occupied-${this.getPlayerName(col, row)}`;
  }

  
  onRestart() {
    this.boardContent = [
      [BoardContent.EMPTY, BoardContent.EMPTY, BoardContent.EMPTY],
      [BoardContent.EMPTY, BoardContent.EMPTY, BoardContent.EMPTY],
      [BoardContent.EMPTY, BoardContent.EMPTY, BoardContent.EMPTY],
    ];
    this.currentPlayerIndex = BoardContent.X;
    this.currentWinnerIndex = 0;
  }
}
