export class Squares {
  constructor(num) {
    this.num = num;
    this._sumOfSquares = (num * (num + 1) * (2 * num + 1)) / 6;
    this._squareOfSum = ((num * (num + 1)) / 2) ** 2;
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this._squareOfSum - this._sumOfSquares;
  }
}
