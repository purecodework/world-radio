import useRadioBrowser from "./hooks/useRadioBrowser";
import Indicator from "./components/Indicator";
import useToggle from "./hooks/useToggle";
import SwitchButton from "./components/SwitchButton";
import SearchList from "./components/SearchList/SearchList";
import CollectionList from "./components/CollectionList";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

const App = () => {
  const { value, toggleValue } = useToggle();

  const [query, setQuery] = useState({
    countryCode: "US",
    tagList: ["jazz"],
    offset: 0,
    limit: 50,
    lastCheckOk: true,
  });

  const scrollLoading = () => {
    console.log("scroll loading called");
    setQuery({ ...query, offset: query.offset + 1 });
  };

  const { getStations, isLoading, radios } = useRadioBrowser(query);

  //index
  const [currRadio, setCurrRadio] = useState({});
  const handleCurrRadio = (radio) => {
    setCurrRadio(radio);
  };
  return (
    <div className="App flex flex-col items-center justify-content h-full w-full">
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
      <div className="flex w-4/5">
        <AudioPlayer
          className="flex items-center bg-none border-none"
          src={currRadio.urlResolved}
          customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
          customProgressBarSection={[]}
          showJumpControls={false}
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
    </div>
  );
};

export default App;
