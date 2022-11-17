import { useState, useRef } from "react";

import music from "../assets/audio/Eternal.mp3";

export const AudioPlayer = () => {
  const [play, setPlay] = useState(false);
  const iconSong = useRef(null);

  const handleClick = () => {
    setPlay(!play);
    if (!play) {
      audio.current.volume = 0.2;
      audio.current.play();
      iconSong.current.classList.add("animate-spin");
    } else {
      audio.current.pause();
      iconSong.current.classList.remove("animate-spin");
    }
  };

  const audio = useRef(null);

  return (
    <div
      className="absolute top-[2%] left-[20%] lg:left-[10%]"
      onClick={() => handleClick()}
    >
      <label
        className="fixed text-white flex items-center sm:text-4xl text-2xl cursor-pointer z-50"
        ref={iconSong}
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
