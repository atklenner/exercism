export const convert = (num) => {
  let string = "";
  if (num % 3 === 0) {
    string += "Pling";
  }
  if (num % 5 === 0) {
    string += "Plang";
  }
  if (num % 7 === 0) {
    string += "Plong";
  }
  if (!string) {
    string = num.toString();
  }
  return string;
};
