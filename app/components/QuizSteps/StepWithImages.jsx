import React from "react";
import Image from "next/image";

const StepWithImages = ({
  question,
  answers,
  onAnswerClick,
  selectedIndex,
  currentStep,
}) => {
  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]">
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
      <div className="w-full flex flex-wrap justify-center gap-4 items-center">
        {answers && answers.length > 0 ? (
          answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswerClick(index)}
              className={`relative w-[calc(50%-8px)] h-[130px] flex items-center justify-center bg-transparent transition-all duration-300 rounded-lg overflow-hidden shadow-lg ${
                selectedIndex === index
                  ? "brightness-75 scale-105"
                  : "opacity-80"
              }`}
              style={{ maxWidth: "200px" }}>
              <Image
                src={answer.image}
                alt={answer.content}
                width={130}
                height={130}
                objectFit="cover"
                className="rounded-md"
              />
              <span
                className={`absolute text-lg font-semibold ${
                  currentStep === 5
                    ? selectedIndex === index
                      ? "text-white opacity-100"
                      : "text-white opacity-30"
                    : selectedIndex === index
                    ? "text-white"
                    : "text-white opacity-100"
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
