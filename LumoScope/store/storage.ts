import { Storage } from "redux-persist";
import EncryptedStorage from "react-native-encrypted-storage";

export const reduxStorage: Storage = {
  getItem: (key) => {
    const value = EncryptedStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    EncryptedStorage.removeItem(key);
    return Promise.resolve();
  },
  setItem: (key, value) => {
    EncryptedStorage.setItem(key, value);
    return Promise.resolve(true);
  },
};
