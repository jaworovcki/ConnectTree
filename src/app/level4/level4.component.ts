import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})
export class Level4Component {

  constructor(private boardService: BoardService) {}

}
