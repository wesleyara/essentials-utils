export const removeArrayItemByIndex = <TArray = unknown>(
  array: TArray[],
  index: number,
) => {
  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};
