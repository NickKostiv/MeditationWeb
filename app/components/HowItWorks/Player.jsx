import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeekChange = e => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = e => {
    const volumeValue = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
    setVolume(volumeValue);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex mt-[30px] flex-col sm:flex-row items-center pb-[20px] sm:pb-0 justify-center w-full max-w-[800px] bg-[#2B5EA8] rounded-[24px] shadow-lg">
      <img
        src="https://blog.slowdive.app/wp-content/uploads/2024/02/deepest_healing_frequency_5.png"
        alt="Audio Thumbnail"
        className="w-full sm:max-w-[220px] mr-auto h-full object-cover "
      />

      {/* Аудіо деталі */}
      <div className="flex px-[10px] flex-col mx-auto items-center justify-center mt-4 sm:mt-0 sm:ml-4">
        <h2 className="text-white text-lg font-bold">
          Waves for Relaxed Focus
        </h2>
        <p className="text-white text-sm mb-4">by 11Hz Alpha Binaural Waves</p>
        <div className="flex items-center space-x-4">
          <button onClick={togglePlay} className="text-white text-[16px]">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeekChange} // Оновлення часу
            className="accent-white w-full sm:w-[200px] max-w-[90%]"
          />

          <span className="text-white text-[10px]">
            {formatTime(currentTime)}
          </span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/audio/simply-meditation-series-11hz-alpha-binaural-waves-for-relaxed-focus-8028.mp3"
        onLoadedData={handleLoadedData}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

export default AudioPlayer;
