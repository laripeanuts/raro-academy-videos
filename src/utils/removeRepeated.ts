/* prettier-ignore */
export const has = <T>(array: T[], value: T): boolean => array.some((item) => item === value);

/* prettier-ignore */
export const removeRepeated = <T>(values: T[]): T[] => (
  values.filter((value, index) => !has(values.slice(0, index), value))
);
