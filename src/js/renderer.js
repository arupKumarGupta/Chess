import { RenderError } from './Errors/RenderError';
import Game from './Game';
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
                cell.appendChild(svg);
            }
            cell.classList.add('cell', grid[i][j].getColor(), 'piece');
            row.appendChild(cell);
        }
        chessBoard.appendChild(row);
    }
}
