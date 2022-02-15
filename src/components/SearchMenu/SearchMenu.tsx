import useToggle from "../../hooks/useToggle";
import { useSearchMenu } from "./useSearchMenu";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchMenu = (props) => {
  const { value, toggleValue } = useToggle();
  const { newQuery, handleName, handleCountryCode, handleTag } =
    useSearchMenu();

  return (
    <>
      <button onClick={toggleValue}>
        <AiOutlineSearch size={20} className="ml-2 text-slate-500" />
      </button>
      {value && (
        <div className="flex flex-col text-sm w-1/2 mb-2">
          <label>Station Name</label>
          <input
            className="focus:outline-none border rounded text-sm p-1"
            onChange={handleName}
            type="text"
            name="Station Name"
            placeholder="FM 102"
          />
          <label>Country Code</label>
          <input
            className="focus:outline-none  border rounded text-sm p-1"
            onChange={handleCountryCode}
            type="text"
            name="Country Code"
            placeholder="AU"
          />
          <label>Tag</label>
          <input
            className="focus:outline-none  border rounded text-sm p-1"
            onChange={handleTag}
            type="text"
            name="Tag"
            placeholder="Jazz"
          />

          <button
            className="bg-slate-200 rounded mt-2 p-1"
            name="submit"
            placeholder="Jazz"
            onClick={() => props.handleNewQuery(newQuery)}
          >
            Go
          </button>
        </div>
      )}
    </>
  );
};
