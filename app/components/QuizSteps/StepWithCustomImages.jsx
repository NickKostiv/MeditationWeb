"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const StepWithCustomImages = ({ question, onAnswerClick, selectedAnswer }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Тривалість анімації
      easing: "ease-in-out", // Плавність переходу
      once: true, // Анімація виконується лише один раз
    });
  }, []);

  // Масиви стилів для кнопок
  const images = [
    { src: "/balance1.webp", alt: "Not balanced", width: 120, height: 75 },
    { src: "/balance2.webp", alt: "Kind of balanced", width: 126, height: 98 },
    { src: "/balance3.webp", alt: "Pretty balanced", width: 163, height: 81 },
    { src: "/balance4.webp", alt: "Very balanced", width: 187, height: 126 },
  ];

  const labels = [
    "Not balanced",
    "Kind of balanced",
    "Pretty balanced",
    "Very balanced",
  ];

  const buttonStyles = [
    { marginBottom: "-18px", rotate: "-6deg", extraMargin: "ml-[-40px]" },
    { marginBottom: "-15px", rotate: "4deg", extraMargin: "mr-[-20px]" },
    { marginBottom: "-8px", rotate: "-8deg", extraMargin: "ml-[-45px]" },
    { marginBottom: "0px", rotate: "0deg", extraMargin: "" }, // Без обертання для останньої кнопки
  ];

  return (
    <div
      className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pb-[80px]"
      data-aos="fade-in" // Анімація для всього контейнера
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

      <div className="w-full flex flex-col items-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(index)}
            className={`relative max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300 ${buttonStyles[index].extraMargin}`}
            style={{
              marginBottom: buttonStyles[index].marginBottom,
            }}
            data-aos="fade-up" // Анімація для кожної кнопки
            data-aos-delay={index * 100} // Додавання затримки для послідовної анімації
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`rounded-md ${
                selectedAnswer === index
                  ? "brightness-0 invert"
                  : selectedAnswer === null
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              objectFit="contain"
            />
            <span
              className={`absolute text-[12px] font-semibold ${
                selectedAnswer === index ? "text-black" : "text-white"
              } z-10`}
              style={{
                transform: `rotate(${buttonStyles[index].rotate})`,
              }}>
              {labels[index]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepWithCustomImages;
