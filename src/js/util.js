import { BACKWARD, DIAGONAL, FORWARD, GRID_LETTER_MAP } from './constant';

export const transformBoardIndex = (letter) => GRID_LETTER_MAP[letter];
export const wrappedEvent = (fn, ...data) => {
    return (...args) => {
        return fn(...args, ...data);
    };
};

export const isValidCell = (grid, i,j) => {
    if(i < 1 || i >= grid.length || j < 1 || j >= grid.length) {
        return false;
    }
    return true;
}

export const getGridLocationFromHtmlCell = (htmlNode, propName) => {
    const prop = htmlNode.dataset[propName];
    if(prop) {
        return prop.split(',').map(v=>+v);
    }
    return [];
}