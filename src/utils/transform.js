export const transformNumberToPercent = (number) => {
  if (!number) return 0;
  return number * 10 * 2;
};
