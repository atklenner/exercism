export const age = (planet, seconds) => {
  let years = (seconds / (60 * 60 * 24 * 365.25)) * returnFactor(planet);
  return Math.round(years * 100) / 100;
};

function returnFactor(string) {
  switch (string) {
    case "earth":
      return 1;
      break;
    case "mercury":
      return 1 / 0.2408467;
      break;
    case "venus":
      return 1 / 0.61519726;
      break;
    case "mars":
      return 1 / 1.8808158;
      break;
    case "jupiter":
      return 1 / 11.862615;
      break;
    case "saturn":
      return 1 / 29.447498;
      break;
    case "uranus":
      return 1 / 84.016846;
      break;
    case "neptune":
      return 1 / 164.79132;
      break;
  }
}
