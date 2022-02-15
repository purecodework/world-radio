import useLocalStorage from "../hooks/useLocalStorage";
import Radio from "./Radio";
const CollectionList = (props) => {
  const { localStorage } = useLocalStorage();
  return (
    <div className="radio-list h-96 h-5/6 w-5/6 overflow-scroll overflow-x-hidden">
      {localStorage &&
        localStorage.map((radio, index) => (
          <Radio
            radio={radio}
            key={index}
            currId={props.currId}
            id={radio.id}
            index={index}
            name={radio.name}
            url={radio.urlResolved}
            homepage={radio.homepage}
            state={radio.state}
            countryCode={radio.countryCode}
            tags={radio.tags}
            favicon={radio.favicon}
            handleCurrRadio={props.handleCurrRadio}
          />
        ))}
    </div>
  );
};
export default CollectionList;
