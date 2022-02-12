import { useState } from "react";
import RadioSearch from "./RadioSearch/RadioSearch";
import SwitchButton from "./SwitchButton";
import useToggle from "../hooks/useToggle";
const RadioTab = () => {
  const { value, toggleValue } = useToggle();

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 flex items-center flex-col">
      <div className="py-16">
        <SwitchButton value={value} toggleValue={toggleValue} />
        {value ? <h1>collections</h1> : <h1>Search</h1>}
      </div>
    </div>
  );
};

export default RadioTab;
