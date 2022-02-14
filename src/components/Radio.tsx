// import { BiHomeSmile } from "react-icons/Bi";
// import { MdRadio } from "react-icons/md";

import { RadioGroup } from "@headlessui/react";

const Radio = (props) => {
  return (
    <div
      className="flex m-2  w-full"
      onClick={() => props.handleCurrRadio(props.radio)}
    >
      {props.favicon ? (
        <img src={props.favicon} className="object-cover h-10 w-10" />
      ) : (
        <h1>nothing</h1>
      )}

      <div className="ml-5">
        <p className="text-sm">{props.name}</p>
        <p className="text-xs overflow-x-scroll ">
          {props.countryCode}{" "}
          {props.tags &&
            props.tags.map((tag: string) => (
              <span className="bg-slate-200 rounded-lg m-1 p-1">{tag}</span>
            ))}
        </p>
      </div>
      {/* <a target="_blank" href={props.homepage}>
        <BiHomeSmile />
      </a> */}
    </div>
  );
};

export default Radio;
