"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadingGif from "../../public/loading-gif1.gif";
import QuizImage from "../../public/quiz-loading-page-banner.webp";
import Quiz from "../components/Quiz";

import { FaApple, FaGooglePlay, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function QuizPageLoader() {
  const [progress, setProgress] = useState(0);
  const [isQuizLoaded, setIsQuizLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsQuizLoaded(true);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (isQuizLoaded) {
    return <Quiz />;
  }

  return (
    <div className="relative h-screen w-full  bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center text-white">
      <div className="max-w-[444px] w-full bg-black rounded-md text-center">
        <div className="mt-8">
          <Image src={QuizImage} alt="Quiz Image" className="w-full" />
        </div>
        <h1
          className="text-[26px] mb-[20px] text-center uppercase"
          style={{
            backgroundImage:
              "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
          Unlock the hidden <br /> power within you
        </h1>
        <div className="flex justify-center text-center">
          <p className="mt-2">Loading the quiz...</p>
          <div className="ml-[10px] p-[10px] flex ">
            <Image
              src={LoadingGif}
              alt="Loading animation"
              width={15}
              height={15}
            />
          </div>
        </div>

        <div className="w-full bg-gray-700 h-[30px] mt-6 rounded-full overflow-hidden">
          <div
            className="bg-[#02bfb9] border-[1px] border-[#02bfb9] h-full transition-all duration-300"
            style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-2">{progress}%</p>
      </div>

      <div className="flex justify-between items-center w-full max-w-[444px] px-6 py-4 text-white text-sm bg-black">
        <div className="flex items-center gap-2">
          <FaApple className="text-white text-lg" />
          <span>App Store</span>
        </div>

        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStarHalfAlt className="text-yellow-500" />
          <span className="ml-2">4.8</span>
        </div>

        <div className="flex items-center gap-2">
          <FaGooglePlay className="text-green-500 text-lg" />
          <span>Google Play</span>
        </div>
      </div>
    </div>
  );
}
