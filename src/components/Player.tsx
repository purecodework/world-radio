import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import customPlayer from "../styles/customPlayer.css";

const Player = (props) => {
  return (
    <div className="flex bg-none border-none shadow-none ">
      <AudioPlayer
        className="flex items-center border-none shadow-none"
        src={props.url}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        customProgressBarSection={[]}
        showJumpControls={false}
        onPlay={(e) => console.log("onPlay")}
      />
      <AiOutlineStar className="h-full" />
    </div>
  );
};

export default Player;
