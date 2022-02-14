// import { BiHomeSmile } from "react-icons/Bi";
// import { MdRadio } from "react-icons/md";

const Radio = (props) => {
  return (
    <div
      className="flex m-2  w-full"
      onClick={() => props.handleCurrRadio(props.radio)}
    >
      {props.favicon ? (
        <a target="_blank" href={props.homepage}>
          <img src={props.favicon} className="object-cover h-14 w-14" />
        </a>
      ) : (
        <p></p>
      )}

      <div className="ml-5">
        <p className="text-sm">{props.name}</p>
        <div className="text-xs p-1 ">
          {props.state ? props.state + "," : ""} {props.countryCode}
          {props.tags &&
            props.tags.map((tag: string) => (
              <span key={tag} className="bg-slate-200 rounded-lg">
                {tag}
              </span>
            ))}
        </div>
      </div>
      {/* 
        <BiHomeSmile />
       */}
    </div>
  );
};

export default Radio;
