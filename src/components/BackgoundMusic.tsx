import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play audio when component mounts
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt to play audio on mount
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay may be blocked by browser - keep isPlaying as false
        console.log("Autoplay blocked or failed:", error);
        setIsPlaying(false);
      }
    };

    playAudio();
  }, []);

  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div
        id="icon-music"
        className={`rounded-full fixed bottom-4 right-4 bg-white shadow-lg z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95 ${
          !isPlaying ? "pause-state" : ""
        }`}
        onClick={handleMusicToggle}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <div
          className={`bg-white rounded-full border-2 p-2 shadow-md transition-colors ${
            isPlaying ? "border-[#a10129]" : "border-gray-300"
          }`}
        >
          <Image
            src={isPlaying ? "/assets/icon/disk.svg" : "/assets/icon/pause.svg"}
            alt={isPlaying ? "Music Icon" : "Pause Icon"}
            width={40}
            height={40}
          />
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src="/assets/music/a_thousand_years.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
