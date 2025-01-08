"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import Login from "../components/Login";
import logoText from "../../public/logo-text.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import ava1 from "../../public/avatar1.png";
import ava2 from "../../public/avatar2.png";
import ava3 from "../../public/avatar3.png";
import ava4 from "../../public/avatar4.png";
import ava5 from "../../public/avatar5.png";
import stars from "../../public/stars.svg";

SwiperCore.use([Autoplay]);
const testimonialSliderData = [
  {
    testimonial:
      "Slowdive is like having a therapist, personal life coach, guru & sleep buddy all wrapped into one. Slowdive allowed me to find myself & believe in who I am again.",
    avatar: ava1,
    name: "Ann",
    period: "Slowdive member for 2 years",
  },
  {
    testimonial:
      "Slowdive is a gem! Honestly, it's my daily sanity saver. The meditations are spot-on, and the app is so user-friendly. Can't imagine my day without it!",
    avatar: ava2,
    name: "Bella",
    period: "Slowdive member for 1 year",
  },
  {
    testimonial:
      "After just one week into the Chakra Cleansing course, I felt a sense of clarity I haven’t experienced in years. It’s as if a weight has been lifted off my shoulders.",
    avatar: ava3,
    name: "Lisa",
    period: "Slowdive member for 3 years",
  },
  {
    testimonial:
      "I was skeptical about this app but it turned out to be the perfect way to end my hectic days. I sleep better and wake up more refreshed now.",
    avatar: ava4,
    name: "John",
    period: "Slowdive member for 6 months",
  },
  {
    testimonial:
      "Slowdive meditations were a game-changer during my recovery from surgery. It helped me manage pain and stay calm throughout the healing process.",
    avatar: ava5,
    name: "Sophia",
    period: "Slowdive member for 2 years",
  },
];

export default function LoginPageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoginLoaded, setIsLoginLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoginLoaded(true);
          return 100;
        }
        return prev + 2;
      });
    }, 900000);
    return () => clearInterval(interval);
  }, []);

  if (isLoginLoaded) {
    return <Login />;
  }

  return (
    <div className="relative h-screen  overflow-hidden bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center justify-end text-white">
      <div className="max-w-[550px] mb-[80px] w-full rounded-md text-center">
        <div className="px-[20px]">
          <Image
            src={logo}
            alt="Logo"
            width={58}
            height={58}
            className="mx-auto mb-[20px]"
          />
          <Image
            src={logoText}
            alt="Logo"
            width={216}
            height={46}
            className="mx-auto mt-[10px]"
          />
          <h1
            className="text-[22px] mt-[60px] mb-[20px] text-center"
            style={{
              backgroundImage:
                "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            <span className="text-[22px] font-bold uppercase">
              30 million people
            </span>{" "}
            <br />
            have chosen SLOWDIVE
          </h1>
        </div>
      </div>
      {/* Reaplce with a slider */}
      <div className="w-[650px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.2}
          spaceBetween={20}
          loop={true}
          speed={5000} // Час для повного проходження одного циклу (в мс)
          autoplay={{
            delay: 0, // Без пауз
            disableOnInteraction: false, // Продовжувати рух навіть після взаємодії
          }}
          className="testimonial-slider">
          {testimonialSliderData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="p-[16px] h-full min-h-[180px] w-[280px] bg-white rounded-[17px] flex flex-col justify-center text-left relative overflow-hidden">
              <div className="bg-white flex flex-col justify-between">
                <p className="text-gray-800 text-[10px] mb-4 leading-relaxed">
                  {item.testimonial}
                </p>
                <div className="flex items-center mb-3">
                  <Image
                    src={stars}
                    alt="Rating Stars"
                    width={80}
                    height={16}
                    className="mr-2"
                  />
                </div>
                <div className="flex items-center">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-black font-bold text-sm">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-xs">{item.period}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Reaplce with a slider */}

      <div className="mt-[60px] w-full max-w-[650px] px-[15px] md:px-[20px]">
        <div className="relative w-full max-w-[650px] h-[50px] bg-transparent border border-white rounded-[15px] overflow-hidden flex items-center">
          <div
            className="h-[50px] bg-teal-400"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />

          <div
            className="h-[50px] bg-gray-700"
            style={{
              width: `${100 - progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />

          <div className="absolute w-full text-white font-semibold text-center">
            Generating Experience
          </div>
        </div>
      </div>
    </div>
  );
}
