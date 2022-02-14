import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchButton = (props) => {
  return (
    <div className="p-5 flex">
      Explore
      <Switch
        checked={props.value}
        onChange={props.toggleValue}
        className={`${
          props.value ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span
          aria-hidden="true"
          className={`${
            props.value ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      Collection
    </div>
  );
};
export default SwitchButton;
