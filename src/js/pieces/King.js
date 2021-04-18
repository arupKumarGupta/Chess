import Piece from './Piece';
import wk from '../../assets/pieces/whiteKing.svg';
import bk from '../../assets/pieces/blackKing.svg';
export default class King extends Piece {
    constructor(name, position, type) {
        super(name, position);
        this.type = type;
    }

    setSvg() {
        this.svg = this.type === 'DARK' ? bk : wk;
    }
}
