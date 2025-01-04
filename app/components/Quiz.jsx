"use client";

import React, { useState, useEffect } from "react";
import HeaderQuiz from "./HeaderQuiz";
import quizContent from "../data/quizContent.json";
import Cookies from "js-cookie";
import Step2 from "./QuizSteps/Step2";
import StepWithCustomImages from "./QuizSteps/StepWithCustomImages";
import StepWithImages from "./QuizSteps/StepWithImages";
import GenericStep from "./QuizSteps/GenericStep";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0); // Поточний крок
  const [savedAnswers, setSavedAnswers] = useState({}); // Збережені відповіді
  const [dynamicStep, setDynamicStep] = useState(null); // Динамічний крок

  // Прокрутка до верху при зміні кроку
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentStep]);

  const handleAnswerClick = (stepIndex, index) => {
    // Save the selected answer
    setSavedAnswers(prev => ({
      ...prev,
      [stepIndex]: index,
    }));

    // Save to cookies
    const stepKey = `step-${stepIndex + 1}`;
    Cookies.set(
      stepKey,
      quizContent[stepIndex]?.answers[index]?.content || "",
      { expires: 7 }
    );

    const current = dynamicStep || quizContent[stepIndex];
    const selectedAnswer = current.answers[index];

    // Handle dynamic step if it exists
    if (selectedAnswer?.dynamicStep) {
      setTimeout(() => {
        setDynamicStep(selectedAnswer.dynamicStep);
      }, 500); // Add delay for smooth transition
      return;
    }

    // If no dynamic step, check for `nextStep`
    if (selectedAnswer?.nextStep) {
      const nextStepIndex = quizContent.findIndex(
        q => q.step === selectedAnswer.nextStep
      );
      if (nextStepIndex !== -1) {
        setTimeout(() => {
          setDynamicStep(null);
          setCurrentStep(nextStepIndex);
        }, 500);
        return;
      }
    }

    // Default behavior: go to the next step
    setTimeout(() => {
      setDynamicStep(null);
      setCurrentStep(prev => prev + 1);
    }, 500);
  };

  const handleBack = () => {
    if (dynamicStep) {
      setDynamicStep(null);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const totalSteps = quizContent.length + (dynamicStep ? 1 : 0);
  const displayedStep = currentStep + 1 + (dynamicStep ? 1 : 0);

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center text-white">
      <HeaderQuiz
        currentStep={displayedStep}
        totalSteps={totalSteps}
        onBack={handleBack}
      />

      <main className="flex min-h-screen max-w-[540px] flex-col items-center text-center w-full">
        {dynamicStep ? (
          <GenericStep
            question={dynamicStep.question}
            answers={dynamicStep.answers}
            onAnswerClick={handleAnswerClick}
            stepIndex={currentStep}
            savedAnswers={savedAnswers}
          />
        ) : quizContent[currentStep]?.step === 2 ? (
          <Step2
            onContinue={() =>
              setTimeout(() => setCurrentStep(prev => prev + 1), 500)
            }
          />
        ) : quizContent[currentStep]?.step === 4 ? (
          <StepWithCustomImages
            question={quizContent[currentStep].question}
            onAnswerClick={index => handleAnswerClick(currentStep, index)}
            selectedAnswer={savedAnswers[currentStep]}
          />
        ) : quizContent[currentStep]?.step === 5 ? (
          <StepWithImages
            question={quizContent[currentStep].question}
            answers={quizContent[currentStep].answers}
            layout="columns"
            onAnswerClick={index => handleAnswerClick(currentStep, index)}
            selectedIndex={savedAnswers[currentStep]}
          />
        ) : quizContent[currentStep] ? (
          <GenericStep
            question={quizContent[currentStep]?.question}
            answers={quizContent[currentStep]?.answers}
            onAnswerClick={handleAnswerClick}
            stepIndex={currentStep}
            savedAnswers={savedAnswers}
          />
        ) : (
          <div className="text-white">Invalid Step</div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
