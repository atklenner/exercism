export const primeFactors = (num) => {
  let factors = [];
  let factor = 2;
  let workingNum = num;
  while (factor < 894120) {
    if (workingNum === 1) break;
    if (workingNum % factor === 0) {
      factors.push(factor);
      workingNum = workingNum / factor;
    } else {
      factor++;
    }
  }
  return factors;
};
