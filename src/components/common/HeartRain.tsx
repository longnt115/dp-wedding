import type { Heart } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeartRain() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = (): Heart => {
      const id = Date.now() + Math.random();
      const left = Math.random() * 100;
      const size = Math.random() * 5 + 30;
      const duration = Math.random() * 3 + 4;
      const delay = Math.random() * 2;
      const opacity = Math.random() * 0.5 + 0.5;

      return { id, left, size, duration, delay, opacity };
    };

    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHearts = [...prev, createHeart()];
        return newHearts.slice(-5);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky bottom-0 w-full h-screen bg-transparent overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall"
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
            alt="Love Ballon"
            width={heart.size}
            height={heart.size}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }

          10% {
            transform: translateY(10vh) translateX(10px);
            opacity: 1;
          }

          20% {
            transform: translateY(20vh) translateX(20px);
            opacity: 1;
          }

          30% {
            transform: translateY(30vh) translateX(30px);
            opacity: 1;
          }

          40% {
            transform: translateY(40vh) translateX(20px);
            opacity: 1;
          }

          50% {
            transform: translateY(50vh) translateX(10px);
            opacity: 1;
          }

          100% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
}
