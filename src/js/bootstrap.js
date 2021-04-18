import Game from './Game';
import { boardRenderer } from './renderer';

const gameInstance = new Game();
gameInstance.init();
function ready () {

    const chessBoard = document.querySelector('#chess-board');
    boardRenderer(chessBoard, gameInstance);
    document.onmousedown = onPieceDrag;
}

function onPieceDrag(event) {
    const target = event.target;
    console.log(target);
}
window.onload = ready;