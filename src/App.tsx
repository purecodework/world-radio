import useRadioBrowser from "./hooks/useRadioBrowser";
import Indicator from "./components/Indicator";
import useToggle from "./hooks/useToggle";
import SwitchButton from "./components/SwitchButton";
import SearchList from "./components/SearchList/SearchList";
import CollectionList from "./components/CollectionList";

import { useState } from "react";
import Player from "./components/Player";
const App = () => {
  const { value, toggleValue } = useToggle();

  const [query, setQuery] = useState({
    countryCode: "US",
    tagList: ["news"],
    offset: 30,
    limit: 30,
    lastCheckOk: true,
  });

  const scrollLoading = () => {
    console.log("scroll loading called");
    setQuery({ ...query, offset: query.offset + 30 });
  };

  const { getStations, isLoading, radios } = useRadioBrowser(query);

  //index
  const [currRadio, setCurrRadio] = useState({});
  const handleCurrRadio = (radio) => {
    setCurrRadio(radio);
  };
  return (
    <div className="App flex flex-col items-center justify-content h-screen w-screen">
      <Indicator />

      <SwitchButton value={value} toggleValue={toggleValue} />
      {value ? (
        <CollectionList />
      ) : (
        <SearchList
          radios={radios}
          handleCurrRadio={handleCurrRadio}
          scrollLoading={scrollLoading}
        />
      )}
      {currRadio ? <p>On air... {currRadio.name} </p> : null}
      <Player url={currRadio.urlResolved} />
    </div>
  );
};

export default App;
