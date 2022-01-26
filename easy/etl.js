export const transform = (old) => {
  let newOld = {};
  Object.keys(old).forEach((key) =>
    old[key].forEach(
      (letter) => (newOld = { ...newOld, [letter.toLowerCase()]: +key })
    )
  );
  return newOld;
};
