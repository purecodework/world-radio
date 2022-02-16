import { Switch } from "@headlessui/react";

/**
 * toggle between search list and collection list
 */
const SwitchButton = (props) => {
  return (
    <div className="p-5 flex">
      <span className="mr-2">Explore</span>
      <Switch
        checked={props.value}
        onChange={props.toggleValue}
        className={` bg-slate-500 relative inline-flex items-center h-6 rounded-full w-16`}
      >
        <span
          aria-hidden="true"
          className={`${
            props.value ? "translate-x-11" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      <span className="ml-2">Collection</span>
    </div>
  );
};
export default SwitchButton;
