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
  // check if item exist in local storage
  const isExist = (value) => localStorage.some((x) => x.id === value.id);

  // check if item valid
  const isValid = (value) => {
    console.log(JSON.stringify(value));

    if (isExist(value) === false && value) {
      return true;
    } else {
      return false;
    }
  };

  // add new item to local storage
  const setItem = (currRadio) => {
    console.log("set item");
    if (isValid(currRadio)) {
      console.log("valid");
      storage.setItem(key, JSON.stringify([...localStorage, currRadio]));
      setLocalStorage((prev) => [...prev, currRadio]);
    } else {
      console.log("not valid");
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

  return { isExist, localStorage, setItem, removeItem };
};

export default useLocalStorage;
