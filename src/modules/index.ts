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
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
