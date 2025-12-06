"use client";
import type { Heart } from "@/types";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";

// Tách Heart item thành component riêng với memo để tránh re-render
const HeartItem = memo(({ heart }: { heart: Heart }) => (
  <div
    className="absolute heart-fall-animation z-50 will-change-transform"
    style={{
      left: `${heart.left}%`,
      top: "-50px",
      // Sử dụng CSS custom properties thay vì inline style
      ["--fall-duration" as string]: `${heart.duration}s`,
      ["--fall-delay" as string]: `${heart.delay}s`,
      ["--fall-opacity" as string]: heart.opacity,
    }}
  >
    <Image
      src="/assets/icon/love-ballon.png"
      alt=""
      width={heart.size}
      height={heart.size}
      // Dùng loading lazy cho decorative images
      loading="lazy"
      aria-hidden="true"
    />
  </div>
));

HeartItem.displayName = "HeartItem";

// Hàm tạo heart - đưa ra ngoài component để tránh recreate
const createHeart = (): Heart => {
  const id = Date.now() + Math.random();
  const left = Math.random() * 100;
  const size = Math.random() * 5 + 30;
  const duration = Math.random() * 3 + 4;
  const delay = Math.random() * 2;
  const opacity = Math.random() * 0.5 + 0.5;

  return { id, left, size, duration, delay, opacity };
};

export default function HeartRain() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Sử dụng requestAnimationFrame thay vì setInterval
  // để đồng bộ với refresh rate của browser
  const animate = useCallback((currentTime: number) => {
    // Chỉ thêm heart mới mỗi 1.5 giây (giảm tải)
    if (currentTime - lastTimeRef.current >= 1500) {
      lastTimeRef.current = currentTime;
      setHearts((prev) => {
        const newHearts = [...prev, createHeart()];
        // Giữ tối đa 4 hearts để giảm DOM nodes
        return newHearts.slice(-7);
      });
    }
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Delay khởi tạo animation để không block initial render
    const timeoutId = setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  // Pause animation khi tab không active để tiết kiệm CPU
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
          requestRef.current = null;
        }
      } else {
        if (!requestRef.current) {
          requestRef.current = requestAnimationFrame(animate);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [animate]);

  return (
    <div
      id="heart-rain-section"
      className="fixed inset-0 w-full h-screen bg-transparent overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <HeartItem key={heart.id} heart={heart} />
      ))}
    </div>
  );
}
