import React, { useEffect, useRef } from "react";
import { weddingConfig } from "../config/weddingData";

export default function MusicPlayer({ isPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio playback deferred until user interaction:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!weddingConfig.audio?.enabled) return null;

  return (
    <audio
      ref={audioRef}
      src={weddingConfig.audio.src}
      loop
      preload="auto"
    />
  );
}
