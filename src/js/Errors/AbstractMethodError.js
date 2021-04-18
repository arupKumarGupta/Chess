export default class AbstractMethodError extends Error {
    constructor(name) {
        super(`Cannot call abstract method ${name}`);
    }
}