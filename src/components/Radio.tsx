// import { BiHomeSmile } from "react-icons/Bi";
// import { MdRadio } from "react-icons/md";
import useToggle from "../hooks/useToggle";

// TODO use radio button
const Radio = (props) => {
  const { value, toggleValue } = useToggle();
  return (
    <div
      className="flex m-2  w-full items-center"
      onClick={() => {
        props.handleCurrRadio(props.radio), toggleValue();
      }}
    >
      <a className="" target="_blank" href={props.homepage}>
        <img src={props.favicon} className="object-cover h-14 w-14" />
      </a>

      <div className="ml-3 w-4/5 ">
        {/* radio name */}
        <p
          className={`${
            props.id === props.currId ? "text-blue-600" : ""
          } text-sm semi-bold p-1`}
        >
          {props.name}
        </p>

        {/* radio info */}
        <p className="text-xs p-1 overflow-x-scroll no-scrollbar whitespace-nowrap">
          {/* radio location */}
          <span className="text-slate-500">
            {props.state ? props.state + "," : null}{" "}
          </span>
          <span className="text-slate-500 overflow-x-hidden mr-1">
            {props.countryCode}
          </span>

          {/* radio tags */}
          {props.tags &&
            props.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-slate-500 ml-1 p-1  bg-slate-200 rounded-lg"
              >
                {tag}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Radio;
