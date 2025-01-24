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

const array = [
  { id: "1", name: "John", detail: { age: 20 } },
  { id: "2", name: "Doe", detail: { age: 30 } },
];

const obj = arrayToObject(array, "detail");

console.log(obj);
