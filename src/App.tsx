import useRadioBrowser from "./hooks/useRadioBrowser";
import Indicator from "./components/Indicator";
import useToggle from "./hooks/useToggle";
import SwitchButton from "./components/SwitchButton";
import SearchList from "./components/SearchList/SearchList";
import CollectionList from "./components/CollectionList";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

const App = () => {
  const { value, toggleValue } = useToggle();
  const { getStations, isLoading, radios } = useRadioBrowser();
  const [currRadio, setCurrRadio] = useState({
    stationName: "",
    url: "",
  });
  const handleCurrRadio = (stationName: string, url: string) => {
    setCurrRadio({ stationName, url });
  };
  return (
    <div className="App flex flex-col items-center justify-content h-full w-full">
      <Indicator />

      <SwitchButton value={value} toggleValue={toggleValue} />
      {value ? (
        <CollectionList />
      ) : (
        <SearchList radios={radios} handleCurrRadio={handleCurrRadio} />
      )}
      {currRadio ? <p>now playing... {currRadio.stationName} </p> : null}
      <AudioPlayer src={currRadio.url} onPlay={(e) => console.log("onPlay")} />
    </div>
  );
};

export default App;
