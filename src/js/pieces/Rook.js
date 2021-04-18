import Piece from './Piece';
import wr from '../../assets/pieces/whiteRook.svg';
import br from '../../assets/pieces/blackRook.svg';
export default class Rook extends Piece {
    constructor(name, position, type) {
        super(name, position);
        this.type = type;
    }

    setSvg() {
        this.svg = this.type === 'DARK' ? br : wr;
    }
}
