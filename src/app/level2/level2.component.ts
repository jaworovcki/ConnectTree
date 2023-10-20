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

    this.currentWinnerIndex = this.getWinnerIndex();
  }

  public getStyle(col: number, row: number): string {
    return `occupied-${this.getPlayerName(col, row)}`;
  }

  public get winnerIndex(): number {
    return this.currentWinnerIndex;
  }

  public getWinnerName(): string {
    return this.playerNames[this.currentWinnerIndex];
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

  private getWinnerIndex(): number {
    // check rows
    for (let row = 0; row < 3; row++) {
      if (this.boardContent[0][row] !== BoardContent.EMPTY &&
        this.boardContent[0][row] === this.boardContent[1][row] &&
        this.boardContent[0][row] === this.boardContent[2][row]) {
        return this.boardContent[0][row];
      }
    }
    // check columns
    for (let col = 0; col < 3; col++) {
      if (this.boardContent[col][0] !== BoardContent.EMPTY &&
        this.boardContent[col][0] === this.boardContent[col][1] &&
        this.boardContent[col][0] === this.boardContent[col][2]) {
        return this.boardContent[col][0];
      }
    }
    // check diagonals
    if (this.boardContent[0][0] !== BoardContent.EMPTY &&
      this.boardContent[0][0] === this.boardContent[1][1] &&
      this.boardContent[0][0] === this.boardContent[2][2]) {
      return this.boardContent[0][0];
    }
    if (this.boardContent[2][0] !== BoardContent.EMPTY &&
      this.boardContent[2][0] === this.boardContent[1][1] &&
      this.boardContent[2][0] === this.boardContent[0][2]) {
      return this.boardContent[2][0];
    }
    return 0;
  }
}
