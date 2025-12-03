import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [isIconHover, setIsIconHover] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  // Track mounted state để tránh setState sau unmount
  const isMountedRef = useRef(true);

  // Show hint after 500ms delay
  useEffect(() => {
    const hintTimer = setTimeout(() => {
      if (isMountedRef.current) {
        setShowHint(true);
      }
    }, 500);
    return () => clearTimeout(hintTimer);
  }, []);

  const playAudio = useCallback(async () => {
    try {
      const audio = audioRef.current;
      if (!audio || !isMountedRef.current) return;
      await audio.play();
      if (isMountedRef.current) {
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Autoplay blocked or failed:", error);
      if (isMountedRef.current) {
        setIsPlaying(false);
      }
    }
  }, []);

  // Detect mobile/tablet một lần
  const isMobileDevice = useRef<boolean | null>(null);

  const userInteraction = useDebouncedCallback(() => {
    if (!isMountedRef.current) return;

    setIsInteracted(true);
    playAudio();

    // Lazy check mobile để tránh reflow
    if (isMobileDevice.current === null) {
      isMobileDevice.current =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          navigator.userAgent.toLowerCase()
        );
    }

    if (isMobileDevice.current) {
      setShowHint(false);
    }
  }, 300);

  useEffect(() => {
    isMountedRef.current = true;

    document.addEventListener("click", userInteraction, { once: true });

    return () => {
      isMountedRef.current = false;
      document.removeEventListener("click", userInteraction);
      userInteraction.cancel(); // Cancel debounce khi unmount
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

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleMusicToggle();
      }
    },
    [handleMusicToggle]
  );

  // Sử dụng useCallback cho event handlers
  const handleMouseEnter = useCallback(() => {
    setIsIconHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsIconHover(false);
  }, []);

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
          aria-hidden={
            !(showHint && !isPlaying && (!isInteracted || isIconHover))
          }
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
