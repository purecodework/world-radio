import { useState } from "react";
import useRadioBrowser from "../../hooks/useRadioBrowser";
// form input and value
export const useSearchMenu = () => {
  const { query } = useRadioBrowser();
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
  };
};
