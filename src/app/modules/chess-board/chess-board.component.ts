import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board';
import { Color, FENChar } from '../../chess-logic/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chess-board',
  imports: [
    CommonModule
  ],
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar|null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color{return this.chessBoard.playerColor};

}
