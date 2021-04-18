import DarkCell from './Cell/DarkCell';
import LightCell from './Cell/LightCell';
import { GRID_SIZE } from './constant';

export default class Board {
    constructor() {
        this.gridSize = GRID_SIZE;
        this.grid = [];
        this.init();
    }

    init() {
        for (let i = 1; i < this.gridSize; ++i) {
            this.grid[i] = [];
            for (let j = 1; j < this.gridSize; ++j) {
                this.grid[i][j] =
                    (i + j) % 2 === 0 ? new LightCell() : new DarkCell();
            }
        }
    }

    getGrid() {
        return this.grid;
    }

    /**
     * @description setting the Pieces in the board
     * @param {Piece[]} pieces | Adds pieces to existing board
     */
    addPieces(pieces = []) {
        // todo
        for (const piece of pieces) {
            const { x, y } = piece.getPosition();
            this.grid[x][y].setPiece(piece);
        }
    }

}
