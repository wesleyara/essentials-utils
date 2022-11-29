import axios from "axios";

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

export const fetchRequest = async (url: string) => {
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
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

export const arrayToObject = (array: any[], key: string) => {
  return array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};
