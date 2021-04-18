import AbstractClassError from '../Errors/AbstractClassError';

export default class Cell {
    /**
     *
     * @param {string} color white | black
     * @param {*} dimension width of the square cell
     */
    constructor(color) {
        if (this.constructor === Cell) {
            throw new AbstractClassError(this.constructor.name);
        }
        this.color = color;
        this.piece = null;
    }

    getColor() {
        return this.color;
    }
    getPiece() {
        return this.piece;
    }
    setPiece(piece) {
        this.piece = piece;
    }
}
