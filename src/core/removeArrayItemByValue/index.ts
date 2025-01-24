export const removeArrayItemByValue = <TArray = unknown>(
  array: TArray[],
  value: TArray,
) => {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};
