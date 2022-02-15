import useRadioBrowser from "./hooks/useRadioBrowser";
import useToggle from "./hooks/useToggle";
import SwitchButton from "./components/SwitchButton";
import SearchList from "./components/SearchList/SearchList";
import CollectionList from "./components/CollectionList";

import useLocalStorage from "./hooks/useLocalStorage";

import { useState } from "react";
import Player from "./components/Player";

const App = () => {
  const { value, toggleValue } = useToggle();

  const { localStorage, setItem, removeItem } = useLocalStorage();

  const { handleNewQuery, radios, scrollLoading } = useRadioBrowser();
  const [currRadio, setCurrRadio] = useState(radios[0]);
  const handleCurrRadio = (radio) => {
    setCurrRadio(radio);
  };
  return (
    <div className="App flex flex-col items-center justify-content h-screen w-screen">
      <button onClick={() => setItem(currRadio)}> add</button>
      <button onClick={() => removeItem(currRadio)}> remove</button>
      {JSON.stringify(localStorage)}
      <SwitchButton value={value} toggleValue={toggleValue} />
      {value ? (
        <CollectionList />
      ) : (
        <SearchList
          radios={radios}
          currId={currRadio ? currRadio.id : null}
          handleCurrRadio={handleCurrRadio}
          scrollLoading={scrollLoading}
          handleNewQuery={handleNewQuery}
        />
      )}
      {currRadio ? <Player radio={currRadio} /> : null}
    </div>
  );
};

export default App;
