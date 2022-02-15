import useRadioBrowser from "./hooks/useRadioBrowser";
import useToggle from "./hooks/useToggle";
import SwitchButton from "./components/SwitchButton";
import SearchList from "./components/SearchList";
import CollectionList from "./components/CollectionList";
import Player from "./components/Player";

const App = () => {
  const { value, toggleValue } = useToggle();
  const { currRadio, handleCurrRadio, handleNewQuery, radios, scrollLoading } =
    useRadioBrowser();

  return (
    <div className="App flex flex-col items-center justify-content h-screen w-screen">
      <SwitchButton value={value} toggleValue={toggleValue} />
      {value ? (
        <CollectionList
          handleCurrRadio={handleCurrRadio}
          currId={currRadio ? currRadio.id : null}
        />
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
