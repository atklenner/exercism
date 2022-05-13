const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const rows = (letter) => {
  let diamond = [];
  let index = ALPHABET.indexOf(letter);
  for (let i = -index; i <= index; i++) {
    let row = "";
    for (let j = -index; j <= index; j++) {
      if (Math.abs(j) === -Math.abs(i) + index) {
        row += ALPHABET[-Math.abs(i) + index];
      } else {
        row += " ";
      }
    }
    diamond.push(row);
  }
  return diamond;
};
