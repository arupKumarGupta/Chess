import Piece from './Piece';
import wq from '../../assets/pieces/whiteQueen.svg';
import bq from '../../assets/pieces/blackQueen.svg';
export default class Queen extends Piece {
    constructor(name, position, type) {
        super(name, position);
        this.type = type;
    }

    setSvg() {
        this.svg = this.type === 'DARK' ? bq : wq;
    }
}
