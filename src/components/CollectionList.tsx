import useLocalStorage from "../hooks/useLocalStorage";
import Radio from "./Radio";
import { radio } from "../types";
/**
 * @param props
 * currId: current playing radio ID
 * handleCurrRadio:set current playing radio
 *
 * @returns collection radios list
 */
const CollectionList = (props) => {
  const { localStorage } = useLocalStorage();
  return (
    <div className="radio-list h-96 h-5/6 w-5/6 overflow-scroll overflow-x-hidden">
      {localStorage &&
        localStorage.map((radio: radio, index: number) => (
          <Radio
            radio={radio}
            key={index}
            currId={props.currId}
            handleCurrRadio={props.handleCurrRadio}
            index={index}
          />
        ))}
    </div>
  );
};
export default CollectionList;
