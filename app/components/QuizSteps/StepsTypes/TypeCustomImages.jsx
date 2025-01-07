"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TypeCustomImages = ({ onAnswerClick, selectedIndex }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
    { marginBottom: "-18px", rotate: "-12deg", extraMargin: "ml-[-40px]" },
    { marginBottom: "-15px", rotate: "4deg", extraMargin: "mr-[-20px]" },
    { marginBottom: "-8px", rotate: "-8deg", extraMargin: "ml-[-45px]" },
    { marginBottom: "0px", rotate: "0deg", extraMargin: "" },
  ];

  return (
    <div
      className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pb-[80px]"
      data-aos="fade-in">
      <div className="w-full flex flex-col items-center">
        {images.map((image, index) => {
          const isSelected = parseInt(selectedIndex, 10) === index;
          const hasSelection = selectedIndex !== undefined;

          return (
            <button
              key={index}
              onClick={() => onAnswerClick(index)}
              className={`relative max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300 ${buttonStyles[index].extraMargin}`}
              style={{
                marginBottom: buttonStyles[index].marginBottom,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`rounded-md transition-all ${
                  isSelected
                    ? "brightness-0 invert scale-105"
                    : hasSelection
                    ? "opacity-50"
                    : "opacity-100 hover:scale-105"
                }`}
                objectFit="contain"
              />
              <span
                className={`absolute text-[13px] font-semibold transition-all ${
                  isSelected ? "text-black" : "text-white"
                } z-10`}
                style={{
                  transform: `rotate(${buttonStyles[index].rotate})`,
                }}>
                {labels[index]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TypeCustomImages;
