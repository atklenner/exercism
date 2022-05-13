export const countWords = (string) => {
  let object = {};
  string.match(/(?!')[a-z'0-9]{1,}(?<!')/gi).forEach((word) => {
    let lowercase = word.toLowerCase();
    if (object[lowercase]) {
      object[lowercase] += 1;
    } else {
      object = { ...object, [lowercase]: 1 };
    }
  });
  return object;
};
