"use client";

import React, { useState } from "react";
import HeaderQuiz from "./HeaderQuiz";
import quizContent from "../data/quizContent.json";
import Cookies from "js-cookie";
import Step2 from "./QuizSteps/Step2";
import StepWithCustomImages from "./QuizSteps/StepWithCustomImages";
import StepWithImages from "./QuizSteps/StepWithImages";
import GenericStep from "./QuizSteps/GenericStep";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [dynamicStep, setDynamicStep] = useState(null); // Для динамічного кроку (6 крок)

  const handleAnswerClick = index => {
    setSelectedAnswer(index);

    // Збереження вибору у cookies
    const stepKey = `step-${currentStep + 1}`;
    Cookies.set(
      stepKey,
      quizContent[currentStep]?.answers[index]?.content || "",
      {
        expires: 7, // Зберігається протягом 7 днів
      }
    );

    // Якщо відповідь має динамічний крок
    const selectedAnswer = quizContent[currentStep]?.answers[index];
    if (selectedAnswer?.nextStep) {
      setTimeout(() => {
        setDynamicStep(selectedAnswer.nextStep);
        setSelectedAnswer(null); // Скидаємо вибір перед переходом
      }, 300);
      return;
    }

    // Якщо це динамічний крок, переходимо до кроку 7
    if (dynamicStep) {
      const step7Index = quizContent.findIndex(q => q.step === 7);
      if (step7Index !== -1) {
        setTimeout(() => {
          setDynamicStep(null); // Виходимо з динамічного кроку
          setCurrentStep(step7Index); // Переходимо на крок 7
          setSelectedAnswer(null);
        }, 300);
        return;
      }
    }

    // Стандартний перехід між кроками
    setTimeout(() => {
      setSelectedAnswer(null); // Скидаємо вибір перед переходом
      setCurrentStep(prev => prev + 1);
    }, 300);
  };

  const handleBack = () => {
    if (dynamicStep) {
      setDynamicStep(null); // Вихід із динамічного кроку
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
    setSelectedAnswer(null); // Скидання вибору при поверненні
  };

  // Загальна кількість кроків враховує 7-й крок
  const totalSteps = quizContent.length + (dynamicStep ? 1 : 0);
  const displayedStep = currentStep + 1 + (dynamicStep ? 1 : 0);

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center text-white">
      {/* Header */}
      <HeaderQuiz
        currentStep={displayedStep}
        totalSteps={quizContent.length + 1} // Включаємо 7-й крок
        onBack={handleBack}
      />

      {/* Main Content */}
      <main className="flex min-h-screen max-w-[540px] flex-col items-center text-center w-full">
        {dynamicStep ? (
          <GenericStep
            question={dynamicStep.question}
            answers={dynamicStep.answers}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        ) : quizContent[currentStep]?.step === 2 ? (
          <Step2 onContinue={() => setCurrentStep(prev => prev + 1)} />
        ) : quizContent[currentStep]?.step === 4 ? (
          <StepWithCustomImages
            question={quizContent[currentStep].question}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        ) : quizContent[currentStep]?.step === 5 ? ( // Додаємо currentStep у StepWithImages
          <StepWithImages
            question={quizContent[currentStep].question}
            answers={quizContent[currentStep].answers}
            layout="columns"
            onAnswerClick={index => handleAnswerClick(index)}
            selectedIndex={selectedAnswer}
            currentStep={currentStep} // Передаємо currentStep у компонент
          />
        ) : quizContent[currentStep] ? (
          <GenericStep
            question={quizContent[currentStep]?.question}
            answers={quizContent[currentStep]?.answers}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        ) : (
          <div className="text-white">Invalid Step</div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
