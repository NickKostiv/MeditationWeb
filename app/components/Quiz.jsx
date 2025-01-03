"use client";

import React, { useState } from "react";
import HeaderQuiz from "./HeaderQuiz";
import quizContent from "../data/quizContent.json";
import Cookies from "js-cookie";
import Step2 from "./QuizSteps/Step2";
import StepWithCustomImages from "./QuizSteps/StepWithCustomImages"; //Step 4
import StepWithImages from "./QuizSteps/StepWithImages";
import GenericStep from "./QuizSteps/GenericStep";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [step6Content, setStep6Content] = useState(null);

  const handleAnswerClick = index => {
    setSelectedAnswer(index);

    // Save selection in cookies
    const stepKey = `step-${currentStep + 1}`;
    Cookies.set(stepKey, quizContent[currentStep].answers[index].content, {
      expires: 7, // Save for 7 days
    });

    if (quizContent[currentStep].step === 5) {
      setStep6Content(quizContent[currentStep].answers[index].step6Content);
    }

    // Move to the next step
    setTimeout(() => {
      if (currentStep < quizContent.length - 1) {
        setCurrentStep(prev => prev + 1);
        setSelectedAnswer(null); // Reset selection for the next step
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
    <div className="flex bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex-col items-center justify-between min-h-screen text-white pb-[0px]">
      {/* Header */}
      <HeaderQuiz
        currentStep={currentStep + 1}
        totalSteps={totalSteps}
        onBack={handleBack}
      />

      {/* Main Content */}
      <main className="flex flex-col items-center text-center w-full max-w-[650px]">
        {quizContent[currentStep].step === 2 ? (
          <Step2 onContinue={() => setCurrentStep(prev => prev + 1)} />
        ) : quizContent[currentStep].step === 4 ? (
          <StepWithCustomImages
            question={quizContent[currentStep].question}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        ) : quizContent[currentStep].step === 5 ? (
          <StepWithImages
            question={quizContent[currentStep].question}
            answers={quizContent[currentStep].answers}
            layout="columns"
            onAnswerClick={index => {
              handleAnswerClick(index);
              setStep6Content(
                quizContent[currentStep].answers[index].step6Content
              ); // Встановлюємо step6Content
            }}
            selectedIndex={selectedAnswer}
          />
        ) : currentStep === 6 && step6Content ? (
          <GenericStep
            question={step6Content.question}
            answers={step6Content.answers}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        ) : (
          <GenericStep
            question={quizContent[currentStep].question}
            answers={quizContent[currentStep].answers}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        )}
      </main>
    </div>
  );
};

export default Quiz;
