import useLocalStorage from "../hooks/useLocalStorage";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
/**
 * Click on like icon to add or remove a radio from local storage
 */
const LikeButton = (props) => {
  const { isExist, setItem, removeItem } = useLocalStorage();

  return isExist(props.radio) ? (
    <AiFillHeart
      size={25}
      fill="#ff4040"
      onClick={(e) => {
        e.stopPropagation();
        removeItem(props.radio);
      }}
    />
  ) : (
    <AiOutlineHeart
      size={25}
      onClick={(e) => {
        e.stopPropagation();
        setItem(props.radio);
      }}
    />
  );
};

export default LikeButton;
