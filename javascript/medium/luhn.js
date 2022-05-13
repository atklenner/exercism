export const valid = (string) => {
  let testRegexp = /[^ 0-9]/g;
  let workingArray = string.match(/\d/g);
  return testRegexp.test(string) ? false : testFunction(workingArray);
};

export function testFunction(array) {
  let total = 0;
  if (array.length <= 1) return false;
  let index = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (index % 2 === 0) {
      if (Number(array[i]) * 2 > 9) {
        total += Number(array[i]) * 2 - 9;
      } else {
        total += Number(array[i]) * 2;
      }
    } else {
      total += Number(array[i]);
    }
    index++;
  }
  return total % 10 === 0;
}
