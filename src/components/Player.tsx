import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Star from "./Star";

const Player = (props) => {
  return (
    <div className="flex border-none w-full max-w-sm mb-2 ">
      <AudioPlayer
        className="flex border-none shadow rounded-lg items-center"
        src={props.radio.urlResolved}
        customControlsSection={[
          <img src={props.radio.favicon} className="object-cover h-10 w-10" />,
          <p className="overflow-hidden w-3/5 no-scrollbar whitespace-nowrap text-sm">
            <p>On air now:</p>
            {props.radio ? props.radio.name : null}
          </p>,
          <Star radio={props.radio} />,
          RHAP_UI.MAIN_CONTROLS,
        ]}
        customProgressBarSection={[]}
        showJumpControls={false}
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
};

export default Player;
