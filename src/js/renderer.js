import { cellReachable, pieceClass } from './constant';
import { RenderError } from './Errors/RenderError';
import Game from './Game';
import Piece from './pieces/Piece';
/**
 * @description renders chess grid on webpage
 * @param {HTMLNode} chessBoard | ref to HTML node
 * @param {Game} gameInstance | ref to the gameInstance
 */
export function boardRenderer(chessBoard, gameInstance) {
    if (!chessBoard) {
        console.info('Chessboard not found');
        throw new RenderError('Chess Board');
    }
    const grid = gameInstance.getBoard().getGrid();
    for (let i = 1; i < grid.length; i++) {
        const row = document.createElement('div');
        row.classList.add('rank');
        for (let j = 1; j < grid.length; j++) {
            const cell = document.createElement('div');
            if (grid[i][j].getPiece()) {
                const svg = document.createElement('img');
                svg.src = grid[i][j].getPiece().getSvg();
                svg.classList.add(pieceClass, grid[i][j].getPiece().name);
                cell.appendChild(svg);
            }
            cell.setAttribute('data-gridLocation', `${i},${j}`);
            cell.classList.add('cell', grid[i][j].getColor());
            row.appendChild(cell);
        }
        chessBoard.appendChild(row);
    }
}

/**
 *
 * @param {HTMLNode} chessBoard
 * @param {Game} gameInstance
 * @param {Piece} selectedPiece
 */
export const updateReachableLocations = (
    chessBoard,
    gameInstance,
    selectedPiece
) => {
    const reachableLocations = selectedPiece.getReachableLocations();
    for (const { x, y } of reachableLocations) {
        const htmlCells = chessBoard.querySelectorAll(
            `.cell[data-gridlocation="${x},${y}"]`
        );
        htmlCells.forEach(node => node.classList.add(cellReachable) );
    }
};
