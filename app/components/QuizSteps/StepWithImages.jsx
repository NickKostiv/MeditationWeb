import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const StepWithImages = ({
  question,
  answers,
  onAnswerClick,
  selectedIndex,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Тривалість анімації
      easing: "ease-in-out", // Плавність переходу
      once: true, // Анімація виконується лише один раз
    });
  }, []);

  return (
    <div
      className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]"
      data-aos="fade-in" // Анімація для всієї сторінки
    >
      <div
        className="flex flex-col mt-[15px] w-full max-w-[280px]"
        data-aos="slide-up" // Анімація для заголовка
      >
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
        className="w-full max-w-[300px] grid grid-cols-2 gap-4 place-items-center items-center"
        data-aos="zoom-in" // Анімація для кнопок
      >
        {answers && answers.length > 0 ? (
          answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswerClick(index)}
              className={`relative w-[130px] h-[130px] flex items-center justify-center bg-transparent transition-all duration-300 rounded-[17px] overflow-hidden shadow-lg ${
                selectedIndex === index
                  ? "brightness-100 border-2 border-white scale-105"
                  : "brightness-75 border-2 border-gray-500 opacity-80"
              }`}>
              <Image
                src={answer.image}
                alt={answer.content}
                width={130}
                height={130}
                objectFit="cover"
                className="rounded-md"
              />
              <span
                className={`absolute text-lg font-semibold transition-all duration-300 ${
                  selectedIndex === index
                    ? "text-white opacity-100"
                    : "text-gray-400 opacity-50"
                }`}>
                {answer.content}
              </span>
            </button>
          ))
        ) : (
          <p className="text-white">No answers available</p>
        )}
      </div>
    </div>
  );
};

export default StepWithImages;
