export const isValid = (isbn) => {
  let cleanISBN = isbn.match(/\d/g);
  let containsX = /X/g.test(isbn);
  if (isbn.length <= 9 || cleanISBN.length > 10) return false;
  let total = cleanISBN.reduce(
    (acc, curr, index) => (acc += +curr * (10 - index)),
    0
  );
  if (containsX) total += 10;
  return total % 11 === 0;
};
