export const square = (int) => {
  if (int < 1 || int > 64) {
    throw new Error("square must be between 1 and 64");
  }
  return BigInt(2 ** (int - 1));
};

export const total = () => {
  let sum = BigInt(0);
  for (let i = 1; i < 65; i++) {
    sum += square(i);
  }
  return sum;
};
