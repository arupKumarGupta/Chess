import Piece from './Piece';
import wn from '../../assets/pieces/whiteKnight.svg';
import bn from '../../assets/pieces/blackKnight.svg';
export default class Knight extends Piece {
    constructor(name, position, type) {
        super(name, position);
        this.type = type;
    }

    setSvg() {
        this.svg = this.type === 'DARK' ? bn : wn;
    }
}
