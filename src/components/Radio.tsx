const Radio = (props) => {
  return (
    <div
      className="flex bg-sky-200 m-2 justify-between"
      onClick={() => props.handleCurrRadio(props.name, props.url)}
    >
      <div>{props.name}</div>
      <a target="_blank" href={props.homepage}>
        HomePage
      </a>
    </div>
  );
};

export default Radio;
