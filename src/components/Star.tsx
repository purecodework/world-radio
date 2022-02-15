import useLocalStorage from "../hooks/useLocalStorage";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Star = (props) => {
  const { isExist, localStorage, setItem, removeItem } = useLocalStorage();
  return isExist(props.radio) ? (
    <AiFillStar
      size={25}
      fill="orange"
      onClick={() => {
        removeItem(props.radio);
      }}
    />
  ) : (
    <AiOutlineStar
      size={25}
      fill="orange"
      onClick={() => {
        setItem(props.radio);
      }}
    />
  );
};
export default Star;
