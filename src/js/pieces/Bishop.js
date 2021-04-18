import Piece from './Piece';
import wb from '../../assets/pieces/whiteBishop.svg';
import bb from '../../assets/pieces/blackBishop.svg';
export default class Bishop extends Piece {
    constructor(name, position, type) {
        super(name, position);
        this.type = type;
    }

    setSvg() {
        this.svg = this.type === 'DARK' ? bb : wb;
    }
}
