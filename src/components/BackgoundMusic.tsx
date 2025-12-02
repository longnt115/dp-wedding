import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDebouncedCallback } from "use-debounce";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [isIconHover, setIsIconHover] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  // Show hint after 1 second delay
  useEffect(() => {
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 500);

    return () => clearTimeout(hintTimer);
  }, []);

  const userInteraction = useDebouncedCallback(() => {
    setIsInteracted(true);
    playAudio();
    if (isMobile || isTablet) setShowHint(false);
  }, 300);

  const playAudio = async () => {
    try {
      const audio = audioRef.current;
      if (!audio) return;
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      // Autoplay may be blocked by browser - keep isPlaying as false
      console.log("Autoplay blocked or failed:", error);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", userInteraction, { once: true });

    return () => {
      document.removeEventListener("click", userInteraction);
    };
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

  const handleMouseEnter = () => {
    setIsIconHover(true);
  };

  const handleMouseLeave = () => {
    setIsIconHover(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex items-center">
        <div
          id="music-toggle-hint"
          ref={toggleRef}
          className={`bg-white self-center py-[0.7rem] w-[320px] pl-3 border-1 border-[#a10129] rounded-l-full mr-[-1.5rem] shadow-md text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-1000 ease-out origin-right ${
            showHint && !isPlaying && (!isInteracted || isIconHover)
              ? "max-w-[320px] opacity-100 mr-0"
              : "max-w-0 opacity-0 -mr-2"
          }`}
        >
          Click vào đây nếu bạn muốn bật nhạc!
        </div>
        <div
          id="icon-music"
          className={`rounded-full bg-white shadow-lg z-50 cursor-pointer transition-transform hover:scale-110 active:scale-100 ${
            !isPlaying ? "pause-state" : ""
          }`}
          onClick={handleMusicToggle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="button"
          ref={iconRef}
          tabIndex={0}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <div
            className={`bg-white rounded-full border-2 p-1 shadow-md transition-colors ${
              isPlaying ? "border-[#a10129]" : "border-gray-300"
            }`}
          >
            <Image
              src={
                isPlaying ? "/assets/icon/disk.svg" : "/assets/icon/pause.svg"
              }
              alt={isPlaying ? "Music Icon" : "Pause Icon"}
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src="/assets/music/a_thousand_years.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
