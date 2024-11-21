import axios from "axios";

import {
  IColorLogOptions,
  IGetNavigatorCurrentLocation,
  INoDuplicateOptions,
} from "../@types";
import {
  backgroundColors,
  bright,
  fontColors,
  reset,
  underscore,
} from "../utils/constants";

export const upperFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateArray = (n: number) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

export const navigateHandler = (targetUrl: string, inNewWindow: boolean) => {
  if (inNewWindow) {
    open(targetUrl, "_blank");
  } else {
    location.href = targetUrl;
  }
};

export const fetcher = async (url: string) => {
  const response = await axios.get(url);
  const data = await response.data;

  return data;
};

export const delay = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

export const arrayEquals = (a: any[], b: any[]) => {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

export const arrayToObject = (array: any[], key: string) => {
  return array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};

export const removeArrayItemByValue = (array: any[], value: any) => {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

export const removeArrayItemByIndex = (array: any[], index: number) => {
  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

export const objectToArray = (obj: any) => {
  return Object.keys(obj).map(key => obj[key]);
};

export const currentRouter = () => {
  const url = window.location.href;
  const pathname = window.location.pathname;
  const hash = window.location.hash;
  const query = window.location.search;
  const protocol = window.location.protocol;
  const host = window.location.host;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const urlObject = {
    url,
    pathname,
    hash,
    query,
    protocol,
    host,
    hostname,
    port,
  };

  return urlObject;
};

export const smartLog = (
  value: any,
  currentFunction: Function,
  label?: string,
) => {
  return console.log(
    `%c[${currentFunction.name}] -`,
    "color: red",
    label ? `${label}:` : "DEBUG:",
    value,
  );
};

export function isEmptyObject(obj: any) {
  return JSON.stringify(obj) === "{}";
}

export const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getPercentage = (currentAmount: number, maxAmount: number) => {
  return (currentAmount / maxAmount) * 100;
};

export const deepClone = (item: any) => {
  const clone = JSON.parse(JSON.stringify(item));

  return clone;
};

export const arrayLastItem = (array: any[]) => {
  return array[array.length - 1];
};

export const generateNullArray = (quantity: number) => {
  const arr: any = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(null);
  }
  return arr;
};

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : undefined;
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const generateRandomString = (length: number) => {
  const charactersWithSymbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let result = "";
  const charactersLength = charactersWithSymbols.length;

  for (let i = 0; i < length; i++) {
    result += charactersWithSymbols.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }

  return result;
};

export const generateRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const getNavigatorCurrentLocation = async ({
  successCallback,
  errorCallback,
}: IGetNavigatorCurrentLocation) => {
  const { coords, timestamp }: GeolocationPosition = await new Promise(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });

  return { coords, timestamp };
};

export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const cnpjMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const cepMask = (value: string) => {
  if (value.length > 9) {
    return value.slice(0, 9);
  }

  return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
};

export const colorLog = (str: string, options: IColorLogOptions) => {
  const { color, bgColor, bold, underline } = options;

  let result = "";
  if (color) {
    result += fontColors[color];
  }
  if (bgColor) {
    result += backgroundColors[bgColor];
  }
  if (bold) {
    result += bright;
  }
  if (underline) {
    result += underscore;
  }

  return `${result}${str}${reset}`;
};

export const removeDuplicates = (
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
