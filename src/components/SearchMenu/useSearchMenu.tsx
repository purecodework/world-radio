import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import { useState } from "react";
import useRadioBrowser from "../../hooks/useRadioBrowser";

export const useSearchMenu = () => {
  const { query, setRadios } = useRadioBrowser();
  const [newQuery, setNewQuery] = useState(query);
  const handleName = (e) => {
    setNewQuery((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleCountryCode = (e) => {
    setNewQuery((prev) => ({ ...prev, countryCode: e.target.value }));
  };
  const handleTag = (e) => {
    setNewQuery((prev) => ({ ...prev, tag: e.target.value }));
  };

  return {
    newQuery,
    handleName,
    handleCountryCode,
    handleTag,
    // handleSearch,
  };
};
