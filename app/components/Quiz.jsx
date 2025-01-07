import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";

import stepsData from "../data/quizContent.json";
import HeaderQuiz from "./HeaderQuiz";
import HeaderAnalyze from "./HeaderAnalyze";
import Step2 from "./QuizSteps/Step2";
import TypeText from "./QuizSteps/StepsTypes/TypeText";
import TypeCustomImages from "./QuizSteps/StepsTypes/TypeCustomImages";
import TypeImages from "./QuizSteps/StepsTypes/TypeImages";
import TypeTextSquare from "./QuizSteps/StepsTypes/TypeTextSquare";
import AnalyzingPage from "./QuizSteps/StaticSteps/Analyzing";
import ChakraSystemRating from "./QuizSteps/StaticSteps/ChakraSystemRating";
import OurCoaches from "./QuizSteps/StaticSteps/OurCoaches";
import OurMethods from "./QuizSteps/StaticSteps/OurMethods";

const StepRenderer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const savedOptions = Cookies.get("quizSelectedOptions");
    return savedOptions ? JSON.parse(savedOptions) : {};
  });

  const totalSteps = 22;

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  const handleAnswerSelect = (answer, nextStep, key, score) => {
    const updatedOptions = {
      ...selectedOptions,
      [currentStep]: { content: answer, key, score },
    };

    setSelectedOptions(updatedOptions);

    Cookies.set("quizSelectedOptions", JSON.stringify(updatedOptions), {
      expires: 7,
    });

    if (nextStep) {
      setTimeout(() => {
        setCurrentStep(nextStep);
      }, 500);
    }
  };

  const clearStepData = step => {
    const updatedOptions = { ...selectedOptions };
    delete updatedOptions[step];
    setSelectedOptions(updatedOptions);

    Cookies.set("quizSelectedOptions", JSON.stringify(updatedOptions), {
      expires: 7,
    });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep === 6) {
        clearStepData(6);
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = step => {
    if (step === 15)
      return (
        <AnalyzingPage
          key={`step-${step}`}
          onFinish={() => setCurrentStep(16)}
        />
      );
    if (step === 16) {
      return (
        <ChakraSystemRating
          key={`step-${step}`}
          selectedOptions={selectedOptions}
          onContinue={() => setCurrentStep(17)}
        />
      );
    }
    if (step === 17) {
      return (
        <OurCoaches
          key={`step-${step}`}
          onContinue={() => setCurrentStep(18)}
        />
      );
    }
    if (step === 18) {
      return (
        <OurMethods
          key={`step-${step}`}
          onContinue={() => setCurrentStep(19)}
        />
      );
    }

    if (step === 6) {
      const selectedKey = selectedOptions[5]?.content || "Health";
      const step6Data = stepsData.find(s => s.step === 6);
      const question = step6Data?.questions[selectedKey];
      const answers =
        step6Data?.answers.find(a => a.key === selectedKey)?.options || [];

      return (
        <div key={`step-${step}`} className="p-4 w-full max-w-[550px]">
          {question && (
            <h1
              className="text-[31px] font-bold leading-[34px] text-center mb-10"
              style={{
                backgroundImage:
                  "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              {question}
            </h1>
          )}
          <TypeText
            key={`step-${step}-TypeText`}
            answers={answers}
            onAnswerClick={index =>
              handleAnswerSelect(
                answers[index].content,
                answers[index].nextStep || currentStep + 1,
                index,
                answers[index].score
              )
            }
            selectedIndex={selectedOptions[6]?.key}
          />
        </div>
      );
    }

    const stepData = stepsData.find(s => s.step === step);

    if (!stepData) return <div key={`step-${step}`}>Step not found</div>;

    return (
      <div key={`step-${step}`} className="py-4 px-[8px] w-full max-w-[550px]">
        {stepData.question && (
          <h1
            className="text-[22px] leading-[21px] md:mt-[40px] md:text-[27px] font-semibold md:leading-[34px] text-center mb-10"
            style={{
              backgroundImage:
                "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            {stepData.question}
          </h1>
        )}
        {stepData.type === "text" && (
          <TypeText
            answers={stepData.answers}
            onAnswerClick={index =>
              handleAnswerSelect(
                stepData.answers[index].content,
                stepData.answers[index].nextStep || currentStep + 1,
                index, // Використовуємо індекс
                stepData.answers[index].score
              )
            }
            selectedIndex={
              selectedOptions[currentStep]?.key !== undefined
                ? Number(selectedOptions[currentStep]?.key) // Приводимо до числа, якщо ключ — рядок
                : undefined
            }
            questionIndex={currentStep}
          />
        )}
        {stepData.type === "custom-images" && (
          <TypeCustomImages
            key={`step-${step}-CustomImages`}
            onAnswerClick={index =>
              handleAnswerSelect(
                stepData.answers[index].content,
                stepData.answers[index].nextStep || currentStep + 1,
                index, // Замість stepData.key використовуємо index
                stepData.answers[index].score
              )
            }
            selectedIndex={
              selectedOptions[currentStep]?.key !== undefined
                ? parseInt(selectedOptions[currentStep]?.key, 10) // Приводимо ключ до числа
                : undefined
            }
          />
        )}
        {stepData.type === "images" && (
          <TypeImages
            key={`step-${step}-Images`}
            answers={stepData.answers}
            onAnswerClick={index =>
              handleAnswerSelect(
                stepData.answers[index].content,
                stepData.answers[index].nextStep || currentStep + 1,
                index, // Передаємо index як ключ
                stepData.answers[index].score
              )
            }
            selectedIndex={
              selectedOptions[currentStep]?.key !== undefined
                ? parseInt(selectedOptions[currentStep]?.key, 10)
                : undefined
            }
          />
        )}
        {stepData.type === "text-square" && (
          <TypeTextSquare
            key={`step-${step}-TextSquare`}
            answers={stepData.answers}
            onAnswerClick={index =>
              handleAnswerSelect(
                stepData.answers[index].content,
                stepData.answers[index].nextStep || currentStep + 1,
                index, // Передаємо індекс як ключ
                stepData.answers[index].score
              )
            }
            selectedIndex={
              selectedOptions[currentStep]?.key !== undefined
                ? Number(selectedOptions[currentStep]?.key) // Приводимо до числа, якщо ключ — рядок
                : undefined // Якщо вибір не зроблено
            }
          />
        )}
        {step === 2 && (
          <Step2
            key={`step-${step}-Static`}
            onContinue={() => setCurrentStep(currentStep + 1)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center text-white">
      {currentStep >= 15 && currentStep <= 18 ? (
        <HeaderAnalyze
          currentStep={currentStep}
          onBack={() => setCurrentStep(currentStep - 1)}
        />
      ) : (
        <HeaderQuiz
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={handleBack}
        />
      )}
      {renderStep(currentStep)}
    </div>
  );
};

export default StepRenderer;
