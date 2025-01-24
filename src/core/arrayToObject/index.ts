export const arrayToObject = <TArray = unknown>(
  array: TArray[],
  key: keyof TArray,
) => {
  const obj: Record<string, TArray> = {};

  array.forEach(item => {
    obj[item[key] as string] = item;
  });

  return obj;
};
