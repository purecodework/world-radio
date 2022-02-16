import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Star from "./Star";
import useToggle from "../hooks/useToggle";

const Player = (props) => {
  const { value, toggleValue } = useToggle();

  return (
    <div
      onClick={toggleValue}
      className={`${
        value
          ? "absolute h-screen w-screen z-10 bg-gray-200"
          : "w-full max-w-sm"
      }`}
    >
      {/* image coverflow toggle */}
      <div
        className={`${
          value ? "h-full  flex items-center justify-center" : "hidden"
        }`}
      >
        <img src={props.radio.favicon} className="object-cover h-80 w-80" />
      </div>
      <AudioPlayer
        className={`left-0 right-0 w-50 absolute bottom-0 max-w-sm m-auto mb-2 !bg-slate-100 `}
        src={props.radio.urlResolved}
        customControlsSection={[
          <div className="flex w-4/5 items-center">
            <img src={props.radio.favicon} className="object-cover h-10 w-10" />
            <p className="overflow-hidden w-3/5 no-scrollbar whitespace-nowrap text-sm mx-5">
              <p className="text-slate-500">On air now:</p>
              {props.radio ? props.radio.name : null}
            </p>
            <Star radio={props.radio} />
          </div>,
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
