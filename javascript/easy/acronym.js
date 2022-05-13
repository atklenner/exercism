export const parse = (string) => {
  return string
    .split(/[ ,_-]{1,}/g)
    .reduce((acc, cur) => (acc += cur.toUpperCase()[0]), "");
};
