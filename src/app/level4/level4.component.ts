import { Component } from '@angular/core';
import { BoardService } from './board.service';
import { BoardCell } from '../level3/level3.component';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})
export class Level4Component {
  private playerNames: string[];

  constructor(public boardService: BoardService) {
    this.playerNames = ['', 'X', 'O'];
  }

  public getStyle(col: number, row: number): string {
    return `occupied-${this.getPlayerName(col, row)}`;
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardService.boardContent[col][row]];
  }

  public getWinnerName(): string {
    return this.playerNames[this.boardService.winnerIndex];
  }

  public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 3; row++) {
      result.push([]);
      for (let col = 0; col < 3; col++) {
        result[row][col] = {
          playerName: this.getPlayerName(col, row),
          class: this.getStyle(col, row),
        };
      }
    }
    return result;
  }
  

}
