"use client";
import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Memoize CountdownCard để tránh re-render không cần thiết
const CountdownCard = memo(({
  value,
  className = "",
  label = "",
  isLoading = false,
}: {
  value: number;
  label?: string;
  className?: string;
  isLoading?: boolean;
}) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="relative">
      <div className="w-14 sm:w-16 md:w-20 lg:w-24 flex items-center justify-center">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dancing-semibold text-white">
          {isLoading ? "--" : String(value).padStart(2, "0")}
        </span>
      </div>
    </div>
    {label && (
      <p className="mt-2 sm:mt-3 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl dancing-regular">
        {label}
      </p>
    )}
  </div>
));

CountdownCard.displayName = "CountdownCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Wedding date constant - defined outside component
const WEDDING_DATE = new Date("2025-12-27T00:00:00").getTime();

export default function Countdown() {
  // Khởi tạo với null để biết chưa mount
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // Track previous time để chỉ update screen reader khi có thay đổi đáng kể
  const lastAnnouncedRef = useRef<string>("");

  useEffect(() => {
    // Đánh dấu đã mount trên client
    setIsMounted(true);
    
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = WEDDING_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Screen reader text - chỉ update mỗi phút để giảm tải
  const timeDescriptionKey = `${timeLeft.days}-${timeLeft.hours}-${timeLeft.minutes}`;
  const shouldAnnounce = isMounted && lastAnnouncedRef.current !== timeDescriptionKey;
  
  if (shouldAnnounce) {
    lastAnnouncedRef.current = timeDescriptionKey;
  }

  return (
    <div
      role="timer"
      aria-label="Đếm ngược đến ngày cưới"
    >
      {/* Hidden text for screen readers - chỉ update mỗi phút */}
      {shouldAnnounce && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Còn {timeLeft.days} ngày, {timeLeft.hours} giờ, {timeLeft.minutes} phút đến ngày cưới
        </div>
      )}
      
      <motion.div
        className="flex flex-row justify-center items-center gap-2 lg:gap-4 xl:gap-5 2xl:gap-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <CountdownCard value={timeLeft.days} label="Ngày" isLoading={!isMounted} />
        <CountdownCard value={timeLeft.hours} label="Giờ" isLoading={!isMounted} />
        <CountdownCard value={timeLeft.minutes} label="Phút" isLoading={!isMounted} />
        <CountdownCard value={timeLeft.seconds} label="Giây" isLoading={!isMounted} />
      </motion.div>
    </div>
  );
}
