import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Play or pause the audio when the isPlaying state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update the duration and currentTime state when the audio metadata is loaded
  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => {
      if (audio) {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      }
    };

    const setAudioTime = () => {
      setCurrentTime(audio?.currentTime || 0);
    };

    audio?.addEventListener("loadedmetadata", setAudioData);
    audio?.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio?.removeEventListener("loadedmetadata", setAudioData);
      audio?.removeEventListener("timeupdate", setAudioTime);
    };
  }, [audioUrl]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="my-8">
      <audio src={audioUrl} ref={audioRef} />
      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div>
        <p>Duration: {duration.toFixed(2)} seconds</p>
        <p>Current Time: {currentTime.toFixed(2)} seconds</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
