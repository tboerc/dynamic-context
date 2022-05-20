export const uniqueBy = <T>(array: T[], getBy: (obj: T) => string) => {
  const set = new Set();
  return array.filter((obj) => {
    const k = getBy(obj);
    return set.has(k) ? false : set.add(k);
  });
};
