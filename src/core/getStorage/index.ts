export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : undefined;
};
