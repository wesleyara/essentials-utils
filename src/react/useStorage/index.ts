import { useEffect, useState } from "react";

import { getStorage, setStorage } from "../../core";

export const useStorage = <TValue = unknown>(key: string, value: TValue) => {
  const [state, setState] = useState<TValue>(() => {
    try {
      const item = getStorage(key);
      const response = item || value;
      return response as TValue;
    } catch (error) {
      console.error("Erro ao ler o localStorage", error);
      return value;
    }
  });

  useEffect(() => {
    try {
      setStorage(key, state);
    } catch (error) {
      console.error("Erro ao escrever no localStorage", error);
    }
  }, [key, state]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          const response = event.newValue ? JSON.parse(event.newValue) : value;
          setState(response as TValue);
        } catch (error) {
          console.error("Erro ao parsear o valor do localStorage", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, value]);

  return [state, setState] as const;
};
