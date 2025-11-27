import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const WeddingInfor = () => {
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
    <div
      id="fh5co-event"
      className="fh5co-bg"
      style={{
        backgroundImage: "url(assets/images/TVL_7046.JPG)",
        backgroundPosition: "bottom",
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box mb-0">
            <h2>Lễ Thành Hôn</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="display-t">
          <div className="display-tc">
            <div className="col-md-6 flex justify-center">
              <div className="col-md-offset-1 col-md-8 col-sm-8 text-center text-white">
                <div className="event-wrap animate-box">
                  <h3> Hải Đăng & Bích Phượng</h3>
                  <motion.div
                    className="text-center px-2 sm:px-4 my-3 sm:my-5 md:my-0 col-span-5 md:col-span-3 row-start-3 md:row-start-1 order-3 md:order-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-wedding-gray900 mb-2">
                      <p className="text-base sm:text-lg md:text-xl barlow-regular flex flex-col">
                        <span className="font-semibold">
                          11h00 <span className="px-1"> | </span> Thứ bảy
                        </span>
                      </p>
                    </div>
                    <div
                      id="wedding-date"
                      className="text-white my-5 sm:my-4 pt-6 pb-4 md:py-8 grid grid-cols-[auto_auto_auto] justify-center items-center gap-0 relative"
                    >
                      <div className="flex md:ml-8 ml-6 items-center">
                        <span className="py-[0.5rem] pr-[2rem] text-lg md:text-xl lg:text-3xl dancing-semibold text-right">
                          27
                        </span>
                        <span className="py-[0.5rem] px-[3rem] md:px-[2.25rem] text-lg md:text-2xl lg:text-4xl dancing-semibold  border-solid border-x-1 sm:border-x-3 border-white">
                          12
                        </span>
                        <span className="py-[0.5rem] pl-[2rem] text-lg md:text-xl lg:text-3xl dancing-semibold text-left">
                          2025
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10"
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
                </div>
              </div>
              {/* <div className="col-md-6 col-sm-6 text-center">
                  <div className="event-wrap animate-box">
                    <h3>Wedding Party</h3>
                    <div className="event-col">
                      <i className="icon-clock"></i>
                      <span>7:00 PM</span>
                      <span>12:00 AM</span>
                    </div>
                    <div className="event-col">
                      <i className="icon-calendar"></i>
                      <span>Monday 28</span>
                      <span>November, 2016</span>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
