const bracketMap = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export const isPaired = (string) => {
  let stack = [];
  let paired = true;
  for (let i = 0; i < string.length; i++) {
    if (/[([{]/.test(string[i])) {
      stack.push(string[i]);
    }
    if (/[)\]}]/.test(string[i])) {
      bracketMap[string[i]] === stack[stack.length - 1]
        ? stack.pop()
        : (paired = false);
    }
  }
  if (stack.length) {
    paired = false;
  }
  return paired;
};
