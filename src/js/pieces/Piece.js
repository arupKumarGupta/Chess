import AbstractClassError from '../Errors/AbstractClassError';
import AbstractMethodError from '../Errors/AbstractMethodError';

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

    isSameTeam(p1,p2) {
      return p1.type === p2.type;
    }
}
