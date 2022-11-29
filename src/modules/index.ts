export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const generateArray = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
