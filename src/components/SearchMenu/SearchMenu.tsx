import React from "react";
import useToggle from "../../hooks/useToggle";
import useRadioBrowser from "../../hooks/useRadioBrowser";
import { useSearchMenu } from "./useSearchMenu";

export const SearchMenu = (props) => {
  const { value, toggleValue } = useToggle();
  const { newQuery, handleName, handleCountryCode, handleTagList } =
    useSearchMenu();

  return (
    <>
      <button onClick={toggleValue}>Search</button>
      {value && (
        <div className="flex flex-col">
          <label>
            Station Name
            <input
              onChange={handleName}
              type="text"
              name="Station Name"
              placeholder="FM 102"
            />
          </label>
          <label>
            Country Code
            <input
              onChange={handleCountryCode}
              type="text"
              name="Country Code"
              placeholder="AU"
            />
          </label>
          <label>
            Tag
            <input
              onChange={handleTagList}
              type="text"
              name="Tag"
              placeholder="Jazz"
            />
          </label>

          <button
            name="submit"
            placeholder="Jazz"
            onClick={() => props.handleNewQuery(newQuery)}
          >
            Go
          </button>
        </div>
      )}
    </>
  );
};
