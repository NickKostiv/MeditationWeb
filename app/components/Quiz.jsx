import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";

import stepsData from "../data/quizContent.json";
import HeaderQuiz from "./HeaderQuiz";
import Step2 from "./QuizSteps/Step2";
import TypeText from "./QuizSteps/StepsTypes/TypeText";
import TypeCustomImages from "./QuizSteps/StepsTypes/TypeCustomImages";
import TypeImages from "./QuizSteps/StepsTypes/TypeImages";

const StepRenderer = () => {
  const [currentStep, setCurrentStep] = useState(1); // Start from the first step
  const [selectedOptions, setSelectedOptions] = useState(() => {
    // Load initial options from cookies if available
    const savedOptions = Cookies.get("quizSelectedOptions");
    return savedOptions ? JSON.parse(savedOptions) : {};
  });

  const totalSteps = stepsData.length;

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  const handleAnswerSelect = (answer, nextStep, key) => {
    const updatedOptions = {
      ...selectedOptions,
      [currentStep]: { content: answer, key },
    };

    // Update state
    setSelectedOptions(updatedOptions);

    // Save updated options to cookies
    Cookies.set("quizSelectedOptions", JSON.stringify(updatedOptions), {
      expires: 7, // Cookie will expire in 7 days
    });

    // Add a delay before transitioning to the next step
    if (nextStep) {
      setTimeout(() => {
        setCurrentStep(nextStep);
      }, 500); // 500ms delay
    }
  };

  const renderStep = step => {
    const stepData = stepsData.find(s => s.step === step);

    if (!stepData) return <div>Step not found</div>;

    if (step === 6) {
      const selectedKey = selectedOptions[5]?.content || "Health"; // Get selected key from step 5, default to "Health"
      const question = stepData.questions[selectedKey];
      const answers =
        stepData.answers.find(a => a.key === selectedKey)?.options || [];

      return (
        <div className="p-4 w-full max-w-[550px]">
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
            answers={answers}
            onAnswerClick={index =>
              handleAnswerSelect(
                answers[index].content,
                answers[index].nextStep,
                index
              )
            }
            selectedIndex={selectedOptions[6]?.key}
          />
        </div>
      );
    }

    return (
      <div className="p-4 w-full max-w-[550px]">
        {stepData.question && (
          <h1
            className="text-[31px] font-bold leading-[34px] text-center mb-10"
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
                index
              )
            }
            selectedIndex={selectedOptions[currentStep]?.key}
          />
        )}
        {stepData.type === "custom-images" && (
          <TypeCustomImages
            onAnswerClick={index =>
              handleAnswerSelect(
                stepData.answers[index].content,
                stepData.answers[index].nextStep || currentStep + 1,
                index
              )
            }
            selectedIndex={selectedOptions[currentStep]?.key}
          />
        )}
        {stepData.type === "images" && (
          <TypeImages
            answers={stepData.answers}
            onAnswerClick={index =>
              handleAnswerSelect(
                stepData.answers[index].content,
                stepData.answers[index].nextStep || currentStep + 1,
                index
              )
            }
            selectedIndex={selectedOptions[currentStep]?.key}
          />
        )}
        {step === 2 && (
          <Step2 onContinue={() => setCurrentStep(currentStep + 1)} />
        )}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center text-white">
      <HeaderQuiz
        currentStep={currentStep}
        totalSteps={totalSteps}
        onBack={() => {
          if (currentStep > 1) setCurrentStep(currentStep - 1);
        }}
      />
      {renderStep(currentStep)}
    </div>
  );
};

export default StepRenderer;
