export const deepClone = <TItem = unknown>(item: TItem) => {
  const clone = JSON.parse(JSON.stringify(item));

  return clone;
};
