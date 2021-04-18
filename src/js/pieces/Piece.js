import AbstractClassError from '../Errors/AbstractClassError';

export default class Piece {
  constructor(name, position) {
    if (this.constructor === Piece) {
      throw new AbstractClassError(this.constructor.name);
    }
    this.name = name;
    this.position = position;
    // will be set by implementation classes
    this.allowedDirections = [];
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
}
