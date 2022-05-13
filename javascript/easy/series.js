export class Series {
  constructor(series) {
    if (!series) {
      throw new Error("series cannot be empty");
    }
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength > this.series.length) {
      throw new Error("slice length cannot be greater than series length");
    } else if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");
    } else if (sliceLength < 0) {
      throw new Error("slice length cannot be negative");
    }
    let collection = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      let newSlice = [];
      for (let j = 0; j < sliceLength; j++) {
        newSlice.push(+this.series[i + j]);
      }
      collection.push(newSlice);
    }
    return collection;
  }
}
