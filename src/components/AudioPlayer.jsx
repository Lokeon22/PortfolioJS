import { useState, useRef } from "react";

import music from "../assets/audio/Eternal.mp3";

export const AudioPlayer = () => {
  const audio = useRef(null);
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    setPlay(!play);
    if (!play) {
      audio.current.volume = 0.2;
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  return (
    <div
      className="absolute top-[2%] left-[20%] lg:left-[10%]"
      onClick={playMusic}
    >
      <label
        className="fixed text-white flex items-center sm:text-4xl text-2xl cursor-pointer z-50 animate-spin"
        style={{ animation: play ? "" : "null" }}
      >
        <span className="animate-beat1">.</span>
        <span className="animate-beat2">.</span>
        <span className="animate-beat1">.</span>
        <span className="animate-beat2">.</span>
        <span className="animate-beat1">.</span>
        <span className="animate-beat2">.</span>
      </label>
      <audio src={music} ref={audio} loop />
    </div>
  );
};
