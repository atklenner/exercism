const AREA_CODE_INDEX = 0;
const EXCHANGE_CODE_INDEX = 3;
const VALID_NUMBER_LENGTH = 10;
const MAX_NUMBER_LENGTH = 11;

export const clean = (number) => {
  if (/[a-z]/gi.test(number)) throw new Error("Letters not permitted");
  if (/[!@:]/gi.test(number)) throw new Error("Punctuations not permitted");

  let cleanString = number.match(/\d/g).join("");

  if (cleanString.length < VALID_NUMBER_LENGTH)
    throw new Error("Incorrect number of digits");
  if (cleanString.length > MAX_NUMBER_LENGTH)
    throw new Error("More than 11 digits");
  if (cleanString.length === MAX_NUMBER_LENGTH) {
    if (cleanString[0] !== "1") throw new Error("11 digits must start with 1");
    cleanString = cleanString.slice(1); // if  the country code is included, remove it
  }
  if (cleanString[AREA_CODE_INDEX] === "0")
    throw new Error("Area code cannot start with zero");
  if (cleanString[AREA_CODE_INDEX] === "1")
    throw new Error("Area code cannot start with one");
  if (cleanString[EXCHANGE_CODE_INDEX] === "0")
    throw new Error("Exchange code cannot start with zero");
  if (cleanString[EXCHANGE_CODE_INDEX] === "1")
    throw new Error("Exchange code cannot start with one");

  return cleanString;
};
