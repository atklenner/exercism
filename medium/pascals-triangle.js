export const rows = (num) => {
  let rowArray = [];
  for (let i = 0; i < num; i++) {
    let newRow = [];
    for (let j = 0; j <= i; j++) {
      newRow.push(combi(i, j));
    }
    rowArray.push(newRow);
  }
  return rowArray;
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function combi(n, k) {
  return factorial(n) / (factorial(n - k) * factorial(k));
}
