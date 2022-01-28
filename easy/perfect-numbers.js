export const classify = (num) => {
  let sum = 0;
  if (num < 1) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      console.log(i);
      sum += i;
    }
  }
  if (sum === num) {
    return "perfect";
  } else if (sum < num) {
    return "deficient";
  } else if (sum > num) {
    return "abundant";
  }
};
