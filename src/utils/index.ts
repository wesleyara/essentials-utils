import { AES, enc } from "crypto-js";

export const generateHash = (message: string, secret: string): string => {
  const hash = AES.encrypt(message, secret);
  return hash.toString();
};

export const decryptHash = (hash: string, secret: string): string => {
  const decrypted = AES.decrypt(hash, secret);

  return decrypted.toString(enc.Utf8);
};
