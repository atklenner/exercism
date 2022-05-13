export const steps = (number) => {
  let newNumber = number;
  let steps = 0;
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  while (newNumber !== 1 && steps < 200) {
    steps++;
    if (newNumber % 2 === 0) {
      newNumber = newNumber / 2;
    } else {
      newNumber = 3 * newNumber + 1;
    }
  }
  console.log(newNumber);
  return steps;
};
