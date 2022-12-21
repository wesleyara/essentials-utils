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
