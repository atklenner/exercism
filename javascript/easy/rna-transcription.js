export const toRna = (string) => {
  return [...string]
    .map((char) => {
      switch (char) {
        case "G":
          return "C";
          break;
        case "C":
          return "G";
          break;
        case "T":
          return "A";
          break;
        case "A":
          return "U";
          break;
      }
    })
    .join("");
};
