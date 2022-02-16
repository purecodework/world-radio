import React, { useEffect } from "react";
import { useState } from "react";
import { queryParams, radio } from "../types";

/**
 * hooks
 * @param key access to local storage object by Key
 *
 * @returns { isExist, localStorage, setItem, removeItem }
 * isExist: return a boolean value if selected radio is already in user collection
 * localStorage: stores radios collection for user
 * setItem: add a new radio into collection
 * removeItem: remove from collection
 */

const useLocalStorage = (key: string = "radios") => {
  const storage = window.localStorage;
  const radioStorage: JSON = JSON.parse(storage.getItem(key)!);
  const [localStorage, setLocalStorage] = useState(
    radioStorage ? radioStorage : []
  );
  // check if item exist in local storage
  const isExist: boolean = (value: radio) =>
    localStorage.some((x: radio) => x.id === value.id);

  // check if item valid
  const isValid = (value: radio) => {
    if (isExist(value) === false && value) {
      return true;
    } else {
      return false;
    }
  };

  // add new item
  const setItem = (currRadio: radio) => {
    if (isValid(currRadio)) {
      storage.setItem(key, JSON.stringify([...localStorage, currRadio]));
      setLocalStorage((prev) => [...prev, currRadio]);
    } else {
      return;
    }
  };

  // remove item
  const removeItem = (currRadio: radio) => {
    const newLocalStorage = localStorage.filter(
      (x: radio) => x.id !== currRadio.id
    );
    storage.setItem(key, JSON.stringify(newLocalStorage));
    setLocalStorage(newLocalStorage);
  };

  return { isExist, localStorage, setItem, removeItem };
};

export default useLocalStorage;
