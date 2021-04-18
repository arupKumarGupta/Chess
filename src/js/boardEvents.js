import { cellReachable, cellSelected, pieceClass } from './constant';
import { makeAMove, updateReachableLocations } from './renderer';
const removeSelectionClasses = () => {
    const prevSelected = document.querySelector(`.cell.${cellSelected}`);
    const prevReachableCells = document.querySelectorAll(
        `.cell.${cellReachable}`
    );
    prevSelected && prevSelected.classList.remove(cellSelected);
    prevReachableCells &&
        prevReachableCells.forEach((node) => {
            node.classList.remove(cellReachable);
            delete node.dataset.reachablefrom;
        });
    return prevSelected;
};

export const onPieceSelected = (event, chessBoard, gameInstance) => {
    const { target } = event;
    const isReachableCellEmpty = target.classList.contains(cellReachable);
    const isReachableCellHasAPiece = target.parentElement.classList.contains(
        cellReachable
    );
    if (isReachableCellEmpty || isReachableCellHasAPiece) {
        const reachableCellDomNode = isReachableCellEmpty
            ? target
            : target.parentElement;
        makeAMove(chessBoard, gameInstance ,reachableCellDomNode);
        removeSelectionClasses();
    } else if (target.classList.contains(pieceClass)) {
        const prevSelected = removeSelectionClasses();
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
            updateReachableLocations(chessBoard, selectedPiece);
        }
    }
};
