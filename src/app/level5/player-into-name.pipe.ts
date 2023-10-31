import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerIntoNamePipe implements PipeTransform {
  private playerNames = [' ', 'X', 'O'];

  transform(player: number, ...args: unknown[]): string {
    if (player < 0 || player > 2) {
      throw new Error('Invalid player number');
    }
    return this.playerNames[player];
  }

}
