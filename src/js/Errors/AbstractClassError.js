export default class AbstractClassError extends Error {
  constructor(className) {
    super(`Cannot instanctiate Abstract class ${className}`);
  }
}
