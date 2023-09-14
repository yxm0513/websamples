import { getRandomValuesBetweenTwoNumericRanges } from "./random.helper";

// Get bitcoin current value mock data random
export const getBitcoinCurrentValue = (): Promise<number> =>
  Promise.resolve(getRandomValuesBetweenTwoNumericRanges(20000, 50000));
