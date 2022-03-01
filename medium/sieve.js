export const primes = (limit) => {
  let possiblePrimes = [];
  for (let i = 2; i <= limit; i++) {
    possiblePrimes.push(i);
  }
  for (let i = 2; i <= limit; i++) {
    for (let j = 2 * i; j <= limit; j += i) {
      if (possiblePrimes.indexOf(j) !== -1) {
        console.log(possiblePrimes.indexOf(j));
        possiblePrimes.splice(possiblePrimes.indexOf(j), 1);
      }
    }
  }
  return possiblePrimes;
};
