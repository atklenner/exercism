const GIGAMILLISECOND = 10 ** 12;

export const gigasecond = (date) => {
  return new Date(date.getTime() + GIGAMILLISECOND);
};
