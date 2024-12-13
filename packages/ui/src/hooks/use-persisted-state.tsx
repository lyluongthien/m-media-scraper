"use client";
import { useEffect, useState } from "react";

type StorageType = "localStorage" | "sessionStorage";

//** this is for hydration on server only */
const tempStorage: Storage & { data: any } = {
  data: {},
  getItem(k) {
    return this.data[k];
  },
  setItem(k, value) {
    this.data[k] = value;
  },

  removeItem(k) {
    delete this.data[k];
  },
  length: 0,
  key() {
    return "";
  },
  clear() {
    this.data = {};
  },
};
export function usePersistedState<T>(
  key: string,
  initialValue: T,
  storageType: StorageType = "localStorage",
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Choose the appropriate storage (localStorage or sessionStorage)
  const storage =
    (storageType === "localStorage"
      ? global.localStorage
      : global.sessionStorage) || tempStorage;

  // Initialize state from storage or use the provided initial value
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = storage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error loading state from ${storageType}`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error saving state to ${storageType}`, error);
    }
  }, [key, state, storage]);

  return [state, setState];
}
