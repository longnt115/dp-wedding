import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDebouncedCallback } from "use-debounce";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [isIconHover, setIsIconHover] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
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
      console.log("Autoplay blocked or failed:", error);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", userInteraction, { once: true });
    return () => {
      document.removeEventListener("click", userInteraction);
    };
  }, [userInteraction]);

  const handleMusicToggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleMusicToggle();
    }
  }, [handleMusicToggle]);

  const handleMouseEnter = () => {
    setIsIconHover(true);
  };

  const handleMouseLeave = () => {
    setIsIconHover(false);
  };

  return (
    <>
      <div 
        className="fixed bottom-4 right-4 flex items-center"
        role="region"
        aria-label="Điều khiển nhạc nền"
      >
        <div
          id="music-toggle-hint"
          ref={toggleRef}
          className={`bg-white self-center py-[0.7rem] w-[320px] pl-3 border-1 border-[#a10129] rounded-l-full mr-[-1.5rem] shadow-md text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-1000 ease-out origin-right ${
            showHint && !isPlaying && (!isInteracted || isIconHover)
              ? "max-w-[320px] opacity-100 mr-0"
              : "max-w-0 opacity-0 -mr-2"
          }`}
          aria-hidden={!(showHint && !isPlaying && (!isInteracted || isIconHover))}
        >
          Click vào đây nếu bạn muốn bật nhạc!
        </div>
        <button
          id="icon-music"
          className={`rounded-full bg-white shadow-lg z-50 cursor-pointer transition-transform hover:scale-110 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#a10129] focus:ring-offset-2 ${
            !isPlaying ? "pause-state" : ""
          }`}
          onClick={handleMusicToggle}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={iconRef}
          type="button"
          aria-label={isPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền"}
          aria-pressed={isPlaying}
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
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
      <audio ref={audioRef} loop aria-hidden="true">
        <source src="/assets/music/a_thousand_years.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>
    </>
  );
};
