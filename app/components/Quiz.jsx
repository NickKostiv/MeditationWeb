"use client";

import React, { useState } from "react";
import HeaderQuiz from "./HeaderQuiz";
import quizContent from "../data/quizContent.json";
// Images
import chakraImg from "../../public/chakras__main.png";
import chakraImgBottom from "../../public/chakras__bottom.png";
//
import balance1 from "../../public/balance1.webp";
import balance2 from "../../public/balance2.webp";
import balance3 from "../../public/balance3.webp";
import balance4 from "../../public/balance4.webp";

import Image from "next/image";
import Cookies from "js-cookie";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = index => {
    setSelectedAnswer(index);

    // Збереження вибору в куки
    const stepKey = `step-${currentStep + 1}`;
    Cookies.set(stepKey, quizContent[currentStep].answers[index].content, {
      expires: 7, // Зберігаємо куку на 7 днів
    });

    // Перехід до наступного кроку
    setTimeout(() => {
      if (currentStep < quizContent.length - 1) {
        setCurrentStep(prev => prev + 1);
        setSelectedAnswer(null); // Скидаємо вибір для наступного кроку
      }
    }, 500);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const totalSteps = quizContent.length;

  return (
    <div className="flex bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex-col items-center justify-between min-h-screen text-white pt-[15px] pb-[0px]">
      {/* Header */}
      <HeaderQuiz
        currentStep={currentStep + 1}
        totalSteps={totalSteps}
        onBack={handleBack}
      />

      {/* Main Content */}
      <main className="flex flex-col items-center text-center w-full max-w-[650px]">
        {quizContent[currentStep].step === 2 ? (
          // Спеціальний контент для другого кроку
          <div className="flex flex-col items-center">
            <Image
              src={chakraImg}
              alt="Chakras"
              width={150}
              height={150}
              className="mb-6"
            />
            <h1
              className="text-[26px] text-center font-semibold px-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Chakras are the energy centers of your body
            </h1>
            <p className="text-[17px] font-normal text-gray-300 mb-4">
              If these energy centers get blocked, <br />
              you may experience{" "}
              <strong className="!font-bold text-white">
                physical or <br />
                emotional symptoms
              </strong>{" "}
              related to a <br />
              particular chakra
            </p>
            <div className="">
              <Image
                src={chakraImgBottom}
                alt="Chakras"
                width={345}
                height={345}
                className="mb-6"
              />
            </div>
            <div className="w-full max-w-[500px] bg-[#4646464d] sticky bottom-0 left-0 right-0 z-30 text-right p-4 rounded-t-[30px]">
              <button
                className="relative w-full inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[24px] font-semibold uppercase leading-[28px] py-4 px-5 rounded-[64px] shadow-none transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-700"
                onClick={() => setCurrentStep(prev => prev + 1)}>
                CONTINUE
              </button>
            </div>
          </div>
        ) : quizContent[currentStep].step === 4 ? (
          // Спеціальний контент для четвертого кроку (зображення)
          <div className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]">
            {/* Main Content */}
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
                {quizContent[currentStep].question}
              </h1>
            </div>
            <div className="w-full flex flex-col items-center">
              {/* Button 1 */}
              <button
                onClick={() => handleAnswerClick(0)}
                className="relative w-full mb-[-18px] ml-[-40px] max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
                <Image
                  src={balance1}
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
                onClick={() => handleAnswerClick(1)}
                className="relative mb-[-15px] mr-[-20px] w-full max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
                <Image
                  src={balance2}
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
                onClick={() => handleAnswerClick(2)}
                className="relative mb-[-8px] ml-[-45px] w-full max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
                <Image
                  src={balance3}
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
                onClick={() => handleAnswerClick(3)}
                className="relative w-full max-w-[250px] h-[100px] flex items-center justify-center bg-transparent transition-all duration-300">
                <Image
                  src={balance4}
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
        ) : (
          // Основний контент для інших кроків
          <div className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]">
            {/* Main Content */}
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
                {quizContent[currentStep].question}
              </h1>
            </div>
            <div className="space-y-4 w-full flex m-auto flex-col items-center">
              {quizContent[currentStep].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full p-4 text-[16px] text-center font-normal rounded-md transition-all duration-300 ${
                    selectedAnswer === null || selectedAnswer === index
                      ? "bg-white text-black opacity-100"
                      : "bg-white text-black opacity-30"
                  }`}>
                  {answer.content}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
