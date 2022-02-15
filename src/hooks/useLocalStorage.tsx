import PreviousMap from "postcss/lib/previous-map";
import React, { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key = "radios") => {
  const storage = window.localStorage;
  // retrive radios list from local storage
  const radioStorage = JSON.parse(storage.getItem(key));

  // store local storage in state
  const [localStorage, setLocalStorage] = useState(
    radioStorage ? radioStorage : []
  );

  // check if item valid and if exist
  const isValid = (value: {}) => {
    const isExist = localStorage.some((x) => x.id === value.id);
    if (isExist === false && value) {
      return true;
    } else {
      return false;
    }
  };

  // add new item to local storage
  const setItem = (currRadio) => {
    console.log("set item");
    if (isValid(currRadio)) {
      storage.setItem(key, JSON.stringify([...localStorage, currRadio]));
      setLocalStorage((prev) => [...prev, currRadio]);
    } else {
      return;
    }
  };

  // remove item from local storage
  const removeItem = (currRadio) => {
    const newLocalStorage = localStorage.filter((x) => x.id !== currRadio.id);
    storage.setItem(key, JSON.stringify(newLocalStorage));
    console.log("removed");
    setLocalStorage(newLocalStorage);
  };

  return { localStorage, setItem, removeItem };
};

export default useLocalStorage;
