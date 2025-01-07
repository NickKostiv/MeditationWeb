"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TypeCustomImages = ({ onAnswerClick, selectedIndex }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  // Array of image details
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
    { marginBottom: "0px", rotate: "0deg", extraMargin: "" }, // No rotation for the last button
  ];

  return (
    <div
      className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pb-[80px]"
      data-aos="fade-in" // Animation for the container
    >
      <div className="w-full flex flex-col items-center">
        {images.map((image, index) => {
          const isSelected = parseInt(selectedIndex, 10) === index; // Приводимо selectedIndex до числа
          const hasSelection = selectedIndex !== undefined;

          return (
            <button
              key={index}
              onClick={() => onAnswerClick(index)}
              className={`relative max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300 ${buttonStyles[index].extraMargin}`}
              style={{
                marginBottom: buttonStyles[index].marginBottom,
              }}
              data-aos="fade-up" // Animation for each button
              data-aos-delay={index * 100} // Add delay for sequential animation
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`rounded-md transition-all ${
                  isSelected
                    ? "brightness-0 invert scale-105" // Highlight selected image
                    : hasSelection
                    ? "opacity-50" // Dim non-selected images
                    : "opacity-100 hover:scale-105" // Default appearance
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
