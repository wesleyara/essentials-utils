import { useEffect, useState } from "react";

import { INoDuplicateOptions, ISecurityStorage } from "../../@types";
import { decryptHash, generateHash } from "../../utils";

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export const useHeight = () => {
  const [height, setHeight] = useState(0);

  const handleResize = () => setHeight(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(window.pageYOffset);

  useEffect(() => {
    setScroll(window.pageYOffset);
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};

export const useNow = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return now;
};

export const useToggle = (
  initialValue: boolean,
): {
  toggleValue: boolean;
  handleToggleValue: () => void;
} => {
  const [toggleValue, setToggleValue] = useState(initialValue);

  const handleToggleValue = () => {
    setToggleValue(state => !state);
  };

  return {
    toggleValue,
    handleToggleValue,
  };
};

export const useSecurityStorage = ({ secret }: ISecurityStorage) => {
  const setStorage = (key: string, value: any) => {
    const valueHash = generateHash(JSON.stringify(value), secret);

    localStorage.setItem(key, valueHash);
  };

  const getStorage = (key: string) => {
    const valueHash = localStorage.getItem(key) || "";

    const value = decryptHash(valueHash, secret);

    return value;
  };

  const removeStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setStorage,
    getStorage,
    removeStorage,
  };
};

export const useRemoveDuplicates = (
  arrayFullOfDuplicates: any[],
  options?: Partial<INoDuplicateOptions>,
): number[] | string[] | { _quantity: number; [key: string]: any }[] => {
  const isArrayOfPrimitives = arrayFullOfDuplicates.every(
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

  arrayFullOfDuplicates.forEach(item => {
    let key;

    if (options?.isObject) {
      if (!options?.anchorKeys) {
        throw new Error(
          "You must provide an anchor key for the object to be compared.",
        );
      }

      key = (
        Array.isArray(options.anchorKeys)
          ? options.anchorKeys
          : [options.anchorKeys]
      )
        .map(anchorKey => item[anchorKey])
        .join("@");
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

  return Array.from(noDuplicateMap.values());
};
