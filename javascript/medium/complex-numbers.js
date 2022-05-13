export class ComplexNumber {
  constructor(r, i) {
    this._real = r;
    this._imag = i;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(otherComp) {
    return new ComplexNumber(
      (this._real += otherComp.real),
      (this._imag += otherComp.imag)
    );
  }

  sub(otherComp) {
    return new ComplexNumber(
      (this._real -= otherComp.real),
      (this._imag -= otherComp.imag)
    );
  }

  div(otherComp) {
    let denom =
      otherComp.real * otherComp.real + otherComp.imag * otherComp.imag;
    let newReal = this._real * otherComp.real + this._imag * otherComp.imag;
    let newImag = this._imag * otherComp.real - this._real * otherComp.imag;
    return new ComplexNumber(newReal / denom, newImag / denom);
  }

  mul(otherComp) {
    let newReal = this._real * otherComp.real - this._imag * otherComp.imag;
    let newImag = this._imag * otherComp.real + this._real * otherComp.imag;
    return new ComplexNumber(newReal, newImag);
  }

  get abs() {
    return Math.sqrt(this._real * this._real + this._imag * this._imag);
  }

  get conj() {
    let newImag;
    if (this._imag === 0) {
      newImag = 0;
    } else {
      newImag = -1 * this._imag;
    }
    return new ComplexNumber(this._real, newImag);
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this._real) * Math.cos(this._imag),
      Math.exp(this._real) * Math.sin(this._imag)
    );
  }
}
