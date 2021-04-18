import Pawn from './pieces/Pawn';
import King from './pieces/King';
import Queen from './pieces/Queen';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Rook from './pieces/Rook';
export const generateSymbol = (val) => Symbol(val);
export const GRID_LETTER_MAP = Object.freeze({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
});

export const PIECES = Object.freeze({
    wp: Pawn,
    wk: King,
    wn: Knight,
    wb: Bishop,
    wr: Rook,
    wq: Queen,
    bp: Pawn,
    bk: King,
    bn: Knight,
    bb: Bishop,
    br: Rook,
    bq: Queen,
});

export const GRID_SIZE = 9;
export const LIGHT = 'LIGHT';
export const DARK = 'DARK';
export const rank = 'rank';
export const pieceClass = 'piece';
export const cellSelected = 'selected';
export const cellReachable = 'reachable';
export const FORWARD = 'F';
export const BACKWARD = 'B';
export const LEFT = 'L';
export const RIGHT = 'R';
export const DIAGONAL = 'D';
