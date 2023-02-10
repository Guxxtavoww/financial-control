import { LooseAutoComplete } from '@/types';

type LocalKeys = 'theme' | 'finances' | 'isFirstTime';

type LocalStorageKeys = LooseAutoComplete<LocalKeys>;

export const getStorageValue = <T>(key: LocalStorageKeys): T => {
  return JSON.parse(localStorage.getItem(key.toString()) || '') as T;
};

export const setStorageValue = <T>(key: LocalStorageKeys, value: T): void => {
  return localStorage.setItem(key.toString(), JSON.stringify(value));
};

export const removeStorageValue = (key: LocalStorageKeys) => {
  return localStorage.removeItem(key.toString());
};
