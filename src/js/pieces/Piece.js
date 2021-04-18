import AbstractClassError from '../Errors/AbstractClassError';
import AbstractMethodError from '../Errors/AbstractMethodError';
import { isValidCell } from '../util';

export default class Piece {
    constructor(name, position, grid) {
        if (this.constructor === Piece) {
            throw new AbstractClassError(this.constructor.name);
        }
        this.name = name;
        this.position = position;
        this.grid = grid;
        // will be set by implementation classes
        this.allowedDirections = [];
        this.reachableLocations = [];
        this.svg = '';
    }

    getPosition() {
        return this.position;
    }

    getSvg() {
        return this.svg;
    }

    getAllowedDirections() {
        return this.allowedDirections;
    }

    getReachableLocations() {
        throw new AbstractMethodError(this.getReachableLocations.name);
    }

    isSameTeam(p1, p2) {
        return p1.type === p2.type;
    }

    /**
     * @description return taken piece or null
     * @param {Object} destination {x,y}
     */
    move(destination) {
        const { x, y } = destination;
        if (isValidCell(x, y) && this.isValidMove(destination)) {
            const grid = this.grid;
            // gets the enemy piece if available
            const killedPiece = grid[x][y].getPiece();
            this.grid[this.position.x][this.position.y].setPiece(null);
            this.position = { x, y };
            grid[x][y].setPiece(this);
            return killedPiece;
        }
        return null;
    }

    isValidMove(destination) {
        for (const { x, y } of this.reachableLocations) {
            if (x === destination.x && y === destination.y) {
                return true;
            }
        }
        return false;
    }
}
