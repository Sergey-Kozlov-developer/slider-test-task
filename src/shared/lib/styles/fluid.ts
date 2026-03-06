export const calcFluid = (
  wMin: number,
  wMax: number,
  base: number = 0,
  vMin: number = 320,
  vMax: number = 1920,
): string => {
  const k = (wMax - wMin) / (vMax - vMin);
  const b = wMin - k * vMin;
  if (base === 0) {
    return `calc(${k} * 100vw + ${b}px)`;
  }
  return `calc(${base}px - (${k} * 100vw + ${b}px))`;
};
