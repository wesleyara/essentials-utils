export const generateNullArray = (quantity: number) => {
  const arr: null[] = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(null);
  }

  return arr;
};
