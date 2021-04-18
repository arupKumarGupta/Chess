import Piece from './Piece';
import wp from '../../assets/pieces/whitePawn.svg';
import bp from '../../assets/pieces/blackPawn.svg';
import { BACKWARD, DARK, DIAGONAL, FORWARD } from '../constant';
import { isValidCell } from '../util';
export default class Pawn extends Piece {
    constructor(name, position, type, grid) {
        super(name, position, grid);
        this.type = type;
        this.allowedDirections = [
            this.type === DARK ? FORWARD : BACKWARD,
            DIAGONAL,
        ];
        this.possibleFirstMove = this.setIsFirstMove();
    }

    setSvg() {
        this.svg = this.type === DARK ? bp : wp;
    }

    getReachableLocations() {
        this.reachableLocations = [];
        const { x, y } = this.position;
        const offset = this.getPawnDominantDirectionOffset();
        const possibleCells = [
            [x + offset, y],
            [x + offset, y + offset, true],
            [x + offset, y - offset, true],
        ];
        this.possibleFirstMove && possibleCells.push([x + 2 * offset, y]);
        for (const [candidateX, candidateY, isDiagonal] of possibleCells) {
            if (isValidCell(this.grid, candidateX, candidateY)) {
                const piece = this.grid[candidateX][candidateY].getPiece();
                const diagonal =
                    isDiagonal && piece && !this.isSameTeam(this, piece);
                const straight = !isDiagonal && !piece && !this.grid[this.position.x + offset][this.position.y].getPiece();
                const valid = diagonal || straight;

                valid &&
                    this.reachableLocations.push({
                        x: candidateX,
                        y: candidateY,
                    });
            }
        }
        return this.reachableLocations;
    }
    isDark() {
        return this.type === DARK;
    }
    getPawnDominantDirectionOffset() {
        return this.isDark() ? 1 : -1;
    }

    setIsFirstMove() {
        const { x } = this.position;
        this.possibleFirstMove = this.isDark() ? x === 2 : x === 7;
        return this.possibleFirstMove;
    }
    move(destination) {
        super.move(destination);
        this.possibleFirstMove = false;
    }
}
