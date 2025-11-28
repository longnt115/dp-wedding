"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the wedding date (December 27, 2025 at midnight)
    const weddingDate = new Date("2025-12-27T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Wedding date has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const CountdownCard = ({
    value,
    className = "",
    label = "",
  }: {
    value: number;
    label?: string;
    className?: string;
  }) => (
    <div
      className={`flex flex-col items-center ${className}`}
      role="timer"
      aria-label={`${value} ${label} remaining until wedding`}
    >
      <div className="relative">
        <div className="w-14 sm:w-16 md:w-20 lg:w-24 flex items-center justify-center">
          <span
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dancing-semibold text-white"
            aria-live="polite"
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      {label && (
        <p className="mt-2 sm:mt-3 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl dancing-regular">
          {label}
        </p>
      )}
    </div>
  );

  return (
    <motion.div
      className="flex flex-row justify-center items-center gap-2 lg:gap-4 xl:gap-5 2xl:gap-7"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <CountdownCard value={timeLeft.days} label="Ngày" />
      <CountdownCard value={timeLeft.hours} label="Giờ" />
      <CountdownCard value={timeLeft.minutes} label="Phút" />
      <CountdownCard value={timeLeft.seconds} label="Giây" />
    </motion.div>
  );
}
