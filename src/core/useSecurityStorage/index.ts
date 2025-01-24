import { decryptHash, generateHash } from "../../utils";
import { SecurityStorageOptions } from "./models/use-security-storage.models";

export const useSecurityStorage = <TValue = unknown>(
  options: SecurityStorageOptions,
) => {
  const { secret } = options;

  const setStorage = (key: string, value: TValue) => {
    const valueHash = generateHash(JSON.stringify(value), secret);

    localStorage.setItem(key, valueHash);
  };

  const getStorage = (key: string) => {
    const valueHash = localStorage.getItem(key) || "";

    const value = decryptHash(valueHash, secret);

    return value;
  };

  const removeStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setStorage,
    getStorage,
    removeStorage,
  };
};
