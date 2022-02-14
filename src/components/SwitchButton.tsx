import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchButton = (props) => {
  return (
    <div className="p-5">
      <span>Search</span>
      <Switch
        checked={props.value}
        onChange={props.toggleValue}
        className={`${props.value ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${props.value ? "translate-x-0" : "translate-x-9"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      <span>Collections</span>
    </div>
  );
};
export default SwitchButton;
