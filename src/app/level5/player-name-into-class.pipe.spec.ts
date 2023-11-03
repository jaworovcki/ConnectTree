import { PlayerNameIntoClassPipe } from "./player-name-into-class.pipe";

describe('PLayer Name Into Class Pipe', () => {
  const pipe = new PlayerNameIntoClassPipe();

  it ('transform X into occupied-X', () => {
    expect(pipe.transform('X')).toBe('occupied-X');
  });

  it ('transform O into occupied-O', () => {
    expect(pipe.transform('O')).toBe('occupied-O');
  });
});