import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { AiOutlineStar } from "react-icons/ai";
const Player = (props) => {
  return (
    <div className="flex bg-none border-none shadow w-full max-w-sm mb-2 ">
      <AudioPlayer
        className="flex  border-none shadow-none "
        src={props.radio.urlResolved}
        customControlsSection={[
          <img src={props.radio.favicon} className="object-cover h-10 w-10" />,
          <div className="overflow-hidden">on air...{props.radio.name} </div>,
          <AiOutlineStar size={25} />,
          RHAP_UI.MAIN_CONTROLS,
        ]}
        customProgressBarSection={[]}
        showJumpControls={false}
        onPlay={(e) => console.log("onPlay")}
      ></AudioPlayer>
    </div>
  );
};

export default Player;
