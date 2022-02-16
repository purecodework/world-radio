import React, { useEffect } from "react";
import { useState } from "react";
import { queryParams, radio } from "../types";

const useLocalStorage = (key: string = "radios") => {
  const storage = window.localStorage;
  // retrive radios list from local storage
  const radioStorage: JSON = JSON.parse(storage.getItem(key)!);

  // store local storage in state
  const [localStorage, setLocalStorage] = useState(
    radioStorage ? radioStorage : []
  );
  // check if item exist in local storage
  const isExist = (value: radio) =>
    localStorage.some((x: radio) => x.id === value.id);

  // check if item valid
  const isValid = (value: radio) => {
    console.log(JSON.stringify(value));

    if (isExist(value) === false && value) {
      return true;
    } else {
      return false;
    }
  };

  // add new item to local storage
  const setItem = (currRadio: radio) => {
    if (isValid(currRadio)) {
      storage.setItem(key, JSON.stringify([...localStorage, currRadio]));
      setLocalStorage((prev) => [...prev, currRadio]);
    } else {
      return;
    }
  };

  // remove item from local storage
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
