import { useState, useEffect } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import useRadioBrowser from "./hooks/useRadioBrowser";
import RadioSearch from "./components/RadioSearch/RadioSearch";
import RadioTab from "./components/RadioTab";
import Indicator from "./components/Indicator";
import useToggle from "./hooks/useToggle";
import SwitchButton from "./components/SwitchButton";
import SearchList from "./components/SearchList";
import CollectionList from "./components/CollectionList";

const App = () => {
  const { getStations, isLoading, radios } = useRadioBrowser();
  const { value, toggleValue } = useToggle();

  return (
    <div className="App flex items-center justify-content h-full w-full">
      <Indicator />
      <SwitchButton value={value} toggleValue={toggleValue} />
      {value ? <SearchList /> : <CollectionList />}

      {/* <button onClick={() => getStations()}>get</button>
        {"radios: " + radios.length}
        {console.log(radios)}
        {radios && (
          <AudioPlayer
            autoPlay
            src={radios[0].urlResolved}
            onPlay={(e) => console.log("onPlay")}
          />
        )} */}
    </div>
  );
};

export default App;
