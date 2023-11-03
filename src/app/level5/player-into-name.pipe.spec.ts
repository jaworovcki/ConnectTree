import { PlayerIntoNamePipe } from "./player-into-name.pipe";

describe('Player Into Name Pipe', () => {
  const pipe = new PlayerIntoNamePipe();

  it('transform 1 into X', () => {
    expect(pipe.transform(1)).toBe('X');
  });

  it('transform 2 into O', () => {
    expect(pipe.transform(2)).toBe('O');
  });

  it('throws an error if the player number is invalid', () => {
    expect(() => pipe.transform(3)).toThrowError('Invalid player number');
  });

});