import Radio from "../components/Radio";
import { useRef } from "react";
import { SearchMenu } from "./SearchMenu/SearchMenu";

const SearchList = (props) => {
  const node = useRef();
  const scrollLoading = props.scrollLoading;

  const onScroll = () => {
    console.log("scrolling...");
    if (node.current) {
      const { scrollTop, scrollHeight, clientHeight } = node.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
        scrollLoading();
      }
    }
  };

  return (
    <div
      className="radio-list h-96 h-full w-5/6 overflow-scroll overflow-x-hidden no-scrollbar"
      onScroll={onScroll}
      ref={node}
    >
      <SearchMenu handleNewQuery={props.handleNewQuery} />
      {props.radios &&
        props.radios.map((radio, index) => (
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

export default SearchList;
