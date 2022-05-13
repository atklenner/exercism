const isEmpty = (message) => !/\S/.test(message);
const isQuestion = (message) => /\?\s*$/.test(message);
const isShout = (message) => /^[^a-z]*[A-Z][^a-z]*$/.test(message);

export const hey = (message) => {
  if (isQuestion(message)) {
    return isShout(message) ? "Calm down, I know what I'm doing!" : "Sure.";
  }

  if (isShout(message)) {
    return "Whoa, chill out!";
  }

  return isEmpty(message) ? "Fine. Be that way!" : "Whatever.";
};
