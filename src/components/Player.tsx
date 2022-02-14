import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Player = (props) => {
  return (
    <div className="wrapper">
      <AudioPlayer
        className="flex items-center bg-none border-none"
        src={props.url}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        customProgressBarSection={[]}
        showJumpControls={false}
        onPlay={(e) => console.log("onPlay")}
      />
      {/* <AiOutlineStar /> */}
    </div>
  );
};

export default Player;
