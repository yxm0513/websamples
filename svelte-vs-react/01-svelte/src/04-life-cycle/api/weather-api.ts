import { getRandomValuesBetweenTwoNumericRanges } from "./random.helper";

// simulate async fetch mock weather api random number
export const getTemperatureCurrentValue = (): Promise<number> =>
  Promise.resolve(getRandomValuesBetweenTwoNumericRanges(20, 25));
