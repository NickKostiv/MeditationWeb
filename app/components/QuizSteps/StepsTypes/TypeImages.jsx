import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TypeImages = ({ answers, onAnswerClick, selectedIndex }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  // Check if the grid is for colors
  const isColorGrid = answers.every(answer => answer.color);

  return (
    <div
      className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]"
      data-aos="fade-in" // Animation for the entire page
    >
      <div
        className={`w-full ${
          isColorGrid
            ? "md:mt-[150px] max-w-[350px] grid-cols-3"
            : "max-w-[300px] grid-cols-2"
        } grid gap-4 place-items-center items-center`}
        data-aos="zoom-in" // Animation for buttons
      >
        {answers && answers.length > 0 ? (
          answers.map((answer, index) => {
            const isSelected = selectedIndex === index; // Check if the current answer is selected
            const hasSelection = selectedIndex !== undefined; // Check if any selection is made

            return (
              <button
                key={index}
                onClick={() => onAnswerClick(index)}
                className={`relative ${
                  isColorGrid
                    ? "w-full max-w-[100px] h-[100px]"
                    : "w-[130px] h-[130px]"
                } flex items-center justify-center transition-all duration-300 rounded-[17px] shadow-lg ${
                  isSelected
                    ? "opacity-100 scale-110 border-4 border-white" // Highlight selected
                    : hasSelection
                    ? "opacity-50" // Dim unselected
                    : "opacity-100 hover:opacity-80" // Default state
                }`}
                style={{ backgroundColor: answer.color || "transparent" }} // Apply color if available
              >
                {/* Show image if it exists */}
                {answer.image && (
                  <Image
                    src={answer.image}
                    alt={answer.content}
                    width={130}
                    height={130}
                    className="rounded-md"
                  />
                )}
                {/* Show content text only if there's no color */}
                {!answer.color && (
                  <span
                    className={`absolute text-lg font-semibold transition-all duration-300 ${
                      isSelected || !hasSelection
                        ? "text-white opacity-100" // Default or selected text
                        : "text-white opacity-50" // Dim unselected text
                    }`}>
                    {answer.content}
                  </span>
                )}
              </button>
            );
          })
        ) : (
          <p className="text-white">No answers available</p>
        )}
      </div>
    </div>
  );
};

export default TypeImages;
