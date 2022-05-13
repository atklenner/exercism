export const recite = (initialBottlesCount, takeDownCount) => {
  let bottles = initialBottlesCount;
  let lyrics = [];
  for (let i = 0; i < takeDownCount; i++) {
    if (i >= 1) {
      lyrics.push("");
    }
    if (bottles >= 3) {
      lyrics.push(
        `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`
      );
      lyrics.push(
        `Take one down and pass it around, ${--bottles} bottles of beer on the wall.`
      );
    } else if (bottles === 2) {
      lyrics.push(
        `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`
      );
      lyrics.push(
        `Take one down and pass it around, ${--bottles} bottle of beer on the wall.`
      );
    } else if (bottles === 1) {
      lyrics.push(
        `${bottles} bottle of beer on the wall, ${bottles} bottle of beer.`
      );
      lyrics.push(
        `Take it down and pass it around, no more bottles of beer on the wall.`
      );
      --bottles;
    } else {
      lyrics.push(
        `No more bottles of beer on the wall, no more bottles of beer.`
      );
      lyrics.push(
        `Go to the store and buy some more, 99 bottles of beer on the wall.`
      );
    }
  }
  return lyrics;
};
