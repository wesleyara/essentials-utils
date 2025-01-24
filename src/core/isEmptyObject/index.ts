export const isEmptyObject = <TObject = unknown>(obj: TObject) => {
  return JSON.stringify(obj) === "{}";
};
