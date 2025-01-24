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
