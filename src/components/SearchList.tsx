import Radio from "../components/Radio";
import { useRef } from "react";
import { SearchMenu } from "./SearchMenu/SearchMenu";
import { radio } from "../types";

const SearchList = (props) => {
  const node = useRef();
  // infinite scroll when reach to bottom
  const scrollLoading = props.scrollLoading;

  // check if user scrolled list to bottom
  const onScroll = () => {
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
        props.radios.map((radio: radio, index: number) => (
          <Radio
            radio={radio}
            key={index}
            currId={props.currId}
            index={index}
            handleCurrRadio={props.handleCurrRadio}
          />
        ))}
    </div>
  );
};

export default SearchList;
