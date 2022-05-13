export const isIsogram = (string) => {
  let letters = string.toLowerCase().replace(/[^a-z]/gi, "");
  let set = new Set(letters);
  return set.size === letters.length;
};
