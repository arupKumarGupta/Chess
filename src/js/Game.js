import Board from './Board';
import defaultPieceConfig from '../assets/piece-config/default.json'
import Piece from './pieces/Piece';
import { PIECES } from './constant';
const { transformBoardIndex } = require('./util');

export default class Game {
  /**
   * @description Game initializer
   * board is board grid comprising of cells
   * Cell can either be empty which a characteristic of black/white and position
   * piece may or may not be in a cell.
   */
  constructor() {
    this.currentState = null;
    this.gameStarted = false;
    this.board = null;
    this.pieces = null;
  }
  init() {
    // starts the game
    console.log('WIP');
    this.board = new Board();
    this.loadPieces();
    this.board.addPieces(this.getPieces());
    console.log(this.getBoard());
  }
  setBoard(board) {
    this.board = board;
  }
  getBoard() {
    return this.board;
  }

  setPieces(pieces) {
    this.pieces = pieces;
  }
  getPieces() {
    return this.pieces;
  }

  /**
   * @description gets Piece Object
   * @param {pieceName} pieceKey // key from the piece object
   * @returns {PieceObject}
   */
  getPiece(pieceKey) {
    return this.pieces[pieceKey];
  }

  /**
   * @description get a board cell
   * @param {string} letter can be 'a' to 'h'
   * @param {*} number can be 1 to 8
   * @returns {Cell} cellObject
   */
  getBoardCell(letter, number) {
    return this.board[transformBoardIndex(letter)][number];
  }

  loadPieces(pieceConfig = defaultPieceConfig) {
    const pieces = [];
    for(const conf of pieceConfig) {
      const piece = new PIECES[conf.name](conf.name, conf.position, conf.type);
      piece.setSvg();
      pieces.push(piece);
    }
    this.pieces = pieces;
  }
}
