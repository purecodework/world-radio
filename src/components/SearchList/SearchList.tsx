import SearchBar from "../SearchBar";
import Radio from "../Radio";
import useRadioBrowser from "../../hooks/useRadioBrowser";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const SearchList = (props) => {
  let [plan, setPlan] = useState("");

  return (
    <div>
      <SearchBar />

      <div className="radio-list">
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
              tags={radio.tags}
              favicon={radio.favicon}
              handleCurrRadio={props.handleCurrRadio}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchList;
