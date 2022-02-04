export const COLORS = {
  black: "0",
  brown: "1",
  red: "2",
  orange: "3",
  yellow: "4",
  green: "5",
  blue: "6",
  violet: "7",
  grey: "8",
  white: "9",
};

export const decodedValue = (array) => {
  return +array
    .slice(0, 2)
    .map((color) => getColorValue(color))
    .join("");
};

export function getColorValue(string) {
  return COLORS[string];
}
