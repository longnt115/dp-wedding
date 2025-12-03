import type { Heart } from "@/types";
import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";

// Memoize heart component để tránh re-render không cần thiết
const HeartItem = memo(({ heart }: { heart: Heart }) => (
  <div
    className="absolute animate-fall z-50"
    style={{
      left: `${heart.left}%`,
      top: "-50px",
      fontSize: `${heart.size}px`,
      animationDuration: `${heart.duration}s`,
      animationDelay: `${heart.delay}s`,
      opacity: heart.opacity,
    }}
  >
    <Image
      src="/assets/icon/love-ballon.png"
      alt=""
      width={heart.size}
      height={heart.size}
      loading="lazy"
    />
  </div>
));

HeartItem.displayName = "HeartItem";

// Tạo heart với stable ID
const createHeart = (counter: number): Heart => ({
  id: counter,
  left: Math.random() * 100,
  size: Math.random() * 5 + 30,
  duration: Math.random() * 3 + 4,
  delay: Math.random() * 2,
  opacity: Math.random() * 0.5 + 0.5,
});

export default function HeartRain() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    // Sử dụng requestIdleCallback hoặc setTimeout với low priority
    const scheduleHeartCreation = () => {
      if ('requestIdleCallback' in window) {
        return window.requestIdleCallback(
          () => {
            counterRef.current += 1;
            setHearts((prev) => {
              const newHearts = [...prev, createHeart(counterRef.current)];
              // Giữ tối đa 5 hearts để giảm DOM nodes
              return newHearts.slice(-5);
            });
          },
          { timeout: 2000 }
        );
      } else {
        // Fallback cho browsers không hỗ trợ requestIdleCallback
        setTimeout(() => {
          counterRef.current += 1;
          setHearts((prev) => {
            const newHearts = [...prev, createHeart(counterRef.current)];
            return newHearts.slice(-5);
          });
        }, 0);
        return 0;
      }
    };

    // Tăng interval lên 2 giây thay vì 1 giây để giảm tải main thread
    const interval = setInterval(scheduleHeartCreation, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="heart-rain-section"
      className="fixed inset-0 w-full h-screen bg-transparent overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
      role="presentation"
    >
      {hearts.map((heart) => (
        <HeartItem key={heart.id} heart={heart} />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
