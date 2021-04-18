import { cellReachable, cellSelected, pieceClass } from './constant';
import { updateReachableLocations } from './renderer';

export const onPieceSelected = (event, chessBoard, gameInstance) => {
    const { target } = event;

    if (target.classList.contains(pieceClass)) {
        const prevSelected = document.querySelector(`.cell.${cellSelected}`);
        const prevReachableCells = document.querySelectorAll(
            `.cell.${cellReachable}`
        );
        prevSelected && prevSelected.classList.remove(cellSelected);
        prevReachableCells &&
            prevReachableCells.forEach((node) =>
                node.classList.remove(cellReachable)
            );
        const parent = target.parentElement;
        const [gridX, gridY] = parent
            .getAttribute('data-gridlocation')
            .split(',');
        const selectedPiece = gameInstance
            .getBoard()
            .getGrid()
            [+gridX][+gridY].getPiece();
        if (parent !== prevSelected) {
            parent.classList.add(cellSelected);
            updateReachableLocations(chessBoard, gameInstance, selectedPiece);
        }
    }
};
