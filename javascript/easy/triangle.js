export class Triangle {
  constructor(...sides) {
    this.sides = [...sides].sort();
    if (this.isTriangle(this.sides)) {
      const uniqueSides = new Set(this.sides);
      this.isEquilateral = uniqueSides.size === 1;
      this.isIsosceles = uniqueSides.size <= 2;
      this.isScalene = uniqueSides.size === 3;
    }
  }

  isEquilateral = false;
  isIsosceles = false;
  isScalene = false;

  isTriangle(sides) {
    return sides[2] > sides[1] + sides[0] || sides[0] === 0 ? false : true;
  }

  get isEquilateral() {
    return this.isEquilateral;
  }

  get isIsosceles() {
    return this.isIsosceles;
  }

  get isScalene() {
    return this.isScalene;
  }
}
