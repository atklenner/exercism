const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];

export const isPangram = (string) => {
  const lowercaseInput = string.toLowerCase();
  return ALPHABET.every((letter) => lowercaseInput.includes(letter));
};
