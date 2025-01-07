"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import QuizPageLoader from "../QuizPage/page";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
  display: "swap",
});

export default function MainPage() {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <QuizPageLoader />;
  }

  return (
    <>
      <Header />

      <section className={`${montserrat.className} relative h-screen w-full`}>
        <div className="absolute inset-0">
          <video
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted>
            <source src="/background-image.mp4" type="video/mp4" />
          </video>
          <div
            className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/bg-img.png')",
            }}></div>
          <div className="absolute hidden inset-0 bg-black bg-opacity-50 md:block"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end pb-[200px] items-center md:justify-center md:pb-0 text-center text-white h-full">
          <h1 className="font-thin text-[12px] tracking-[4px] opacity-100 uppercase md:text-[20px]">
            #1 MEDITATION APP
          </h1>
          <p className="font-thin text-[34px] text-white tracking-[0.5em] mt-[15px] text-center uppercase md:mt-[42px] xl:text-[100px] xl:tracking-[20px] md:text-[75px] sm:tracking-[0.5em] sm:mt-[22px] sm:pl-[10px]">
            slowdive
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full max-w-[250px] md:max-w-[248px] backdrop-blur-[5px] bg-white/5 border border-white rounded-[50px] tracking-[3.2px] mt-[42px] md:opacity-70 uppercase hover:text-white hover:opacity-100 transition-all duration-[600ms] ease-in-out">
            <p className=" px-[12px] py-[14px] text-[12px] font-thin text-white">
              Start Your Journey
            </p>
          </button>
        </div>

        <div className="absolute md:justify-around bottom-0 w-full flex justify-between px-[10px] md:px-[32px] pb-[95px] md:pb-[75px] text-center md:bg-shadow tracking-[3.2px] font-thin text-white md:text-gray-300 md:text-opacity-60">
          <div className="flex flex-col items-center">
            <p className="text-[26px] md:text-[30px]">4.9</p>
            <p className="text-[12px] tracking-[1px] md:text-[16px]">
              STORE RATING
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[26px] md:text-[30px]">20M+</p>
            <p className="text-[12px] tracking-[1px] md:text-[16px]">
              DOWNLOADS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[26px] md:text-[30px]">8000+</p>
            <p className="text-[12px] tracking-[1px] md:text-[16px] lg:mt-2">
              5-STAR REVIEWS
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
