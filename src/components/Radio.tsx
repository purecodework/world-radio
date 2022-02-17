import useToggle from "../hooks/useToggle";
/**
 * radio element in search/collection list
 */
const Radio = (props) => {
  const { toggleValue } = useToggle();
  const radio = props.radio;
  return (
    <div
      className="flex m-2  w-full items-center"
      onClick={() => {
        props.handleCurrRadio(props.radio), toggleValue();
      }}
    >
      {/* radio icon */}
      <a className="" target="_blank" href={props.homepage}>
        <img src={radio.favicon} className="object-cover h-14 w-14" />
      </a>

      {/* radio name */}
      <div className="ml-3 w-4/5 ">
        <p
          className={`${
            radio.id === props.currId ? "text-blue-600" : ""
          } text-sm semi-bold p-1`}
        >
          {radio.name}
        </p>

        {/* radio info: states, countryCode, tags */}
        <p className="text-xs p-1 overflow-x-scroll no-scrollbar whitespace-nowrap">
          <span className="text-slate-500">
            {radio.state ? radio.state + "," : null}{" "}
          </span>
          <span className="text-slate-500 overflow-x-hidden mr-1">
            {radio.countryCode}
          </span>

          {/* radio tags */}
          {radio.tags &&
            radio.tags.map((tag: string) => (
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
