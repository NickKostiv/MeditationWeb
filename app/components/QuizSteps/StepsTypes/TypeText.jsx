import React from "react";

const TypeText = ({ answers, onAnswerClick, selectedIndex }) => {
  return (
    <div
      className="flex flex-col w-full max-w-[550px] justify-center md:mt-[130px] text-white px-4 pt-[15px] pb-[80px]"
      data-aos="fade-in">
      <div className="space-y-4 w-full flex m-auto flex-col">
        {answers.map((answer, index) => {
          const isSelected = selectedIndex === index; // Check if the current answer is selected
          const hasSelection = selectedIndex !== undefined; // Check if any selection is made

          return (
            <div
              key={index}
              className="w-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}>
              <button
                onClick={() => onAnswerClick(index)}
                className={`flex items-center w-full p-4 text-[16px] text-left font-normal rounded-md transition-all duration-300 ${
                  isSelected
                    ? "bg-white text-black opacity-100 shadow-lg" // Highlight selected
                    : hasSelection
                    ? "bg-gray-300 text-black opacity-30" // Dim unselected
                    : "bg-white text-black opacity-100 hover:shadow-lg" // Default
                }`}>
                {/* Conditionally render image if provided */}
                {answer.image && (
                  <img
                    src={answer.image}
                    alt={answer.content}
                    className="w-6 h-6 mr-3" // Adjust size and spacing
                  />
                )}
                {answer.content}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypeText;
