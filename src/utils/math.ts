export const clamp = (min: number, max: number, value: number): number => {
  if (value <= min) return min;
  else if (value >= max) return max;
  return value;
};
