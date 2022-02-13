// import { BiHomeSmile } from "react-icons/Bi";
// import { MdRadio } from "react-icons/md";

const Radio = (props) => {
  return (
    <div
      className="flex bg-sky-200 m-2 justify-between h-10"
      onClick={() => props.handleCurrRadio(props.radio)}
    >
      {props.favicon ? (
        <img src={props.favicon} className="object-cover h-10 w-10" />
      ) : (
        // <MdRadio className="h-10 w-10" />
        <h1>nothing</h1>
      )}

      <div>{props.name}</div>
      {/* <a target="_blank" href={props.homepage}>
        <BiHomeSmile />
      </a> */}
    </div>
  );
};

export default Radio;
