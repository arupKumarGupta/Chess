export class RenderError extends Error {
    constructor(name) {
        super(`Unable to render ${name}`);
    }
}