const COST_OF_BOOK = 800;

export const cost = (books) => {
  const bookGroups = [];
  while (books.length > 0) {
    let set = new Set(books);
    bookGroups.push(set.size);
    [...set].forEach((book) => books.splice(books.indexOf(book), 1));
  }
  while (bookGroups.includes(3) && bookGroups.includes(5)) {
    bookGroups.splice(bookGroups.indexOf(5), 1);
    bookGroups.splice(bookGroups.indexOf(3), 1);
    bookGroups.push(4, 4);
  }
  return bookGroups.reduce((accumulator, currentValue) => {
    return (accumulator +=
      COST_OF_BOOK * discount(currentValue) * currentValue);
  }, 0);
};

export function discount(amount) {
  let percentage;
  switch (amount) {
    case 1:
      percentage = 0;
      break;
    case 2:
      percentage = 0.05;
      break;
    case 3:
      percentage = 0.1;
      break;
    case 4:
      percentage = 0.2;
      break;
    case 5:
      percentage = 0.25;
      break;
    default:
      percentage = 0;
      break;
  }
  return 1 - percentage;
}
