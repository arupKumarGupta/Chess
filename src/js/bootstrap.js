import { onPieceSelected } from './boardEvents';
import Game from './Game';
import { boardRenderer } from './renderer';
import { wrappedEvent } from './util';
const gameInstance = new Game();
gameInstance.init();
function ready() {
    const chessBoard = document.querySelector('#chess-board');
    boardRenderer(chessBoard, gameInstance);
    chessBoard.addEventListener('click', wrappedEvent(onPieceSelected, chessBoard, gameInstance));
}

window.onload = ready;
