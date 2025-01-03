import React from "react";
import Image from "next/image";

const StepWithCustomImages = ({
  question,
  answers,
  onAnswerClick,
  selectedAnswer,
}) => {
  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]">
      <div className="flex flex-col items-center mt-10 w-full">
        <h1
          className="text-[26px] text-center mb-10"
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
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(index)}
            className="relative w-full mb-[-18px] max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
            <Image
              src={answer.image}
              width={120}
              height={75}
              alt={answer.content}
              objectFit="contain"
              className={`rounded-md ${
                selectedAnswer === index
                  ? "brightness-0 invert"
                  : selectedAnswer === null
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            />
            <span
              className={`absolute text-[12px] font-semibold ${
                selectedAnswer === index ? "text-black" : "text-white"
              } z-10`}>
              {answer.content}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepWithCustomImages;
