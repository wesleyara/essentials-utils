export const objectToArray = (obj: any) => {
  return Object.keys(obj).map(key => obj[key]);
};
