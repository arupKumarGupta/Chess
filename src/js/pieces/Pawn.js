import Piece from './Piece';
import wp from '../../assets/pieces/whitePawn.svg';
import bp from '../../assets/pieces/blackPawn.svg';
export default class Pawn extends Piece {
    constructor(name, position, type) {
        super(name, position);
        this.type = type;
    }

    setSvg() {
        this.svg = this.type === 'DARK' ? bp : wp;
    }
}
