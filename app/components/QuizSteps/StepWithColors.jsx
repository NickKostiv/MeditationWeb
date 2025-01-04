import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StepWithColors = ({
  question,
  options,
  onColorSelect,
  selectedColor,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]"
      data-aos="fade-in">
      <div
        className="flex flex-col mt-[15px] w-full max-w-[280px]"
        data-aos="slide-up">
        <h1
          className="text-[21px] leading-[24px] text-center mb-10"
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
      <div
        className="w-full grid grid-cols-3 gap-4 items-center"
        data-aos="zoom-in">
        {options.map((option, index) => (
          <div
            key={index}
            className={`w-[80px] h-[80px] rounded-[13px] cursor-pointer transition-all duration-200 ${
              selectedColor === option.value
                ? "scale-105 border-4 border-white"
                : "border-2 border-gray-500 opacity-80"
            }`}
            style={{
              backgroundColor: option.color,
            }}
            onClick={() => onColorSelect(option.value)}></div>
        ))}
      </div>
    </div>
  );
};

export default StepWithColors;
