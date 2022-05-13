export const isArmstrongNumber = (num) => {
  let string = num.toString();
  let length = string.length;
  let sum = 0;
  for (let char of string) {
    sum += (+char) ** length;
  }
  return sum === num;
};
