export const setStorage = <TValue = unknown>(key: string, value: TValue) => {
  localStorage.setItem(key, JSON.stringify(value));
};
