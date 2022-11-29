export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const generateArray = (n: number) => Array.from({ length: n }, (_, i) => i + 1);


export const navigateHandler = (targetUrl: string, inNewWindow: boolean) => {
  if (inNewWindow) {
    open(targetUrl, "_blank");
  } else {
    location.href = targetUrl;
  }
};