"use client";
// Step 5

import React from "react";
import Image from "next/image";

const StepWithCustomImages = ({ question, onAnswerClick, selectedAnswer }) => {
  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4  pb-[80px]">
      {/* Question */}
      <div className="flex flex-col mt-[15px] w-full max-w-[280px]">
        <h1
          className="text-[21px]  leading-[24px]  text-center mb-10"
          style={{
            backgroundImage:
              "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
          {question}
        </h1>
      </div>

      {/* Answer Buttons */}
      <div className="w-full flex flex-col items-center">
        {/* Button 1 */}
        <button
          onClick={() => onAnswerClick(0)}
          className="relative w-full mb-[-18px] ml-[-40px] max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
          <Image
            src="/balance1.webp"
            width={120}
            height={75}
            alt="Not balanced"
            objectFit="contain"
            className={`rounded-md ${
              selectedAnswer === 0
                ? "brightness-0 invert"
                : selectedAnswer === null
                ? "opacity-100"
                : "opacity-50"
            }`}
          />
          <span
            className={`absolute text-[12px] -rotate-6 font-semibold ${
              selectedAnswer === 0 ? "text-black" : "text-white"
            } z-10`}>
            Not balanced
          </span>
        </button>

        {/* Button 2 */}
        <button
          onClick={() => onAnswerClick(1)}
          className="relative mb-[-15px] mr-[-20px] w-full max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
          <Image
            src="/balance2.webp"
            alt="Kind of balanced"
            width={126}
            height={98}
            objectFit="contain"
            className={`rounded-md ${
              selectedAnswer === 1
                ? "brightness-0 invert"
                : selectedAnswer === null
                ? "opacity-100"
                : "opacity-50"
            }`}
          />
          <span
            className={`absolute text-[12px] -rotate-6 font-semibold ${
              selectedAnswer === 1 ? "text-black" : "text-white"
            } z-10`}>
            Kind of balanced
          </span>
        </button>

        {/* Button 3 */}
        <button
          onClick={() => onAnswerClick(2)}
          className="relative mb-[-8px] ml-[-45px] w-full max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
          <Image
            src="/balance3.webp"
            alt="Pretty balanced"
            width={163}
            height={81}
            objectFit="contain"
            className={`rounded-md ${
              selectedAnswer === 2
                ? "brightness-0 invert"
                : selectedAnswer === null
                ? "opacity-100"
                : "opacity-50"
            }`}
          />
          <span
            className={`absolute text-[15px] -rotate-6 font-semibold ${
              selectedAnswer === 2 ? "text-black" : "text-white"
            } z-10`}>
            Pretty balanced
          </span>
        </button>

        {/* Button 4 */}
        <button
          onClick={() => onAnswerClick(3)}
          className="relative w-full max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
          <Image
            src="/balance4.webp"
            alt="Very balanced"
            width={187}
            height={126}
            objectFit="contain"
            className={`rounded-md ${
              selectedAnswer === 3
                ? "brightness-0 invert"
                : selectedAnswer === null
                ? "opacity-100"
                : "opacity-50"
            }`}
          />
          <span
            className={`absolute text-[18px] -rotate-6 font-semibold ${
              selectedAnswer === 3 ? "text-black" : "text-white"
            } z-10`}>
            Very balanced
          </span>
        </button>
      </div>
    </div>
  );
};

export default StepWithCustomImages;
