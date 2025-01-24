import { RemoveDuplicatesOptions } from "./models/use-remove-duplicates.models";

export const useRemoveDuplicates = <TArray = unknown>(
  array: TArray[],
  options?: Partial<RemoveDuplicatesOptions<TArray>>,
) => {
  const isArrayOfPrimitives = array.every(
    item => item !== null && typeof item !== "object",
  );

  if (options?.isObject) {
    if (isArrayOfPrimitives) {
      throw new Error(
        "The array is not an array of objects. Please set the isObject option to false.",
      );
    }
  } else {
    if (!isArrayOfPrimitives) {
      throw new Error(
        "The array is not an array of primitives. Please set the isObject option to true.",
      );
    }
  }

  const noDuplicateMap = new Map();

  array.forEach(item => {
    let key;

    if (options?.isObject) {
      if (!options?.anchorKeys) {
        throw new Error(
          "You must provide an anchor key for the object to be compared.",
        );
      }

      const anchorArray = Array.isArray(options.anchorKeys)
        ? options.anchorKeys
        : [options.anchorKeys];

      key = anchorArray.map(anchorKey => item[anchorKey]).join("@");
    } else {
      key = item;
    }

    if (noDuplicateMap.has(key)) {
      if (options?.counts) {
        const existingItem = noDuplicateMap.get(key);
        noDuplicateMap.set(key, {
          ...existingItem,
          _quantity: noDuplicateMap.get(key)?._quantity + 1,
        });
      }
      return;
    }

    noDuplicateMap.set(key, options?.counts ? { ...item, _quantity: 1 } : item);
  });

  return Array.from(noDuplicateMap.values()) as TArray[];
};
