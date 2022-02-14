import SearchBar from "../SearchBar";
import Radio from "../Radio";
import useRadioBrowser from "../../hooks/useRadioBrowser";
import { RadioGroup } from "@headlessui/react";
import { useState, useRef } from "react";

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
      className="radio-list h-96 h-5/6 w-5/6 overflow-scroll overflow-x-hidden"
      onScroll={onScroll}
      ref={node}
    >
      Search List:
      {props.radios &&
        props.radios.map((radio, index) => (
          <Radio
            radio={radio}
            key={index}
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
