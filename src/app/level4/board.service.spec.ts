import { BoardService } from "./board.service";

describe('BoardService', () => {
  it('can compare two numbers', () => {
    expect(1).toBe(1);
  });

  it('can set pieces on the board', () => {
    const board = new BoardService();

    board.set(0,0);  
    expect(board.boardContent[0][0]).toBe(1); 

    board.set(1,0);  
    expect(board.boardContent[1][0]).toBe(2); 
  });

  it('ignores duplicate calls to set for the same cell', () => {
    const board = new BoardService();

    board.set(0,0);
    board.set(0,0);
    expect(board.boardContent[0][0]).toBe(1);
  });

  it('can detect a winner in a row', () => {
    const board = new BoardService();

    board.set(0,0);
    board.set(0,1);
    board.set(1,0);
    board.set(1,1);
    board.set(2,0);
    expect(board.winnerIndex).toBe(1);
  });

  it('can detect a winner in a column', () => {
    const board = new BoardService();

    board.set(0,0);
    board.set(1,0);
    board.set(0,1);
    board.set(1,1);
    board.set(0,2);
    expect(board.winnerIndex).toBe(1);
  });

  it('can detect a winner in a diagonal', () => {
    const board = new BoardService();

    board.set(0,0);
    board.set(1,0);
    board.set(1,1);
    board.set(2,0);
    board.set(2,2);
    expect(board.winnerIndex).toBe(1);
  });
});