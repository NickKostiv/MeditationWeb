import React from "react";

const TypeTextSquare = ({ answers, onAnswerClick, selectedIndex }) => {
  return (
    <div
      className="flex flex-col w-full max-w-[550px] justify-center md:mt-[130px] text-white px-4 pt-[15px] pb-[80px]"
      data-aos="fade-in">
      <div className="grid grid-cols-2 gap-[20px] m-auto" data-aos="zoom-in">
        {answers.map((answer, index) => {
          const isSelected = parseInt(selectedIndex, 10) === index; // Приводимо selectedIndex до числа для коректного порівняння
          const hasSelection = selectedIndex !== undefined; // Перевіряємо, чи є вибір

          return (
            <button
              key={`answer-${index}`} // Додано унікальний ключ
              onClick={() => onAnswerClick(index)}
              className={`flex flex-col items-center justify-center w-full max-w-[130px] h-[130px] p-4 text-[16px] text-center font-medium rounded-[20px] transition-all duration-300 ${
                isSelected
                  ? "bg-white text-black opacity-100 shadow-lg" // Виділення вибраного
                  : hasSelection
                  ? "bg-gray-300 text-black opacity-50" // Затемнення невибраних, якщо є вибір
                  : "bg-white text-black hover:opacity-100" // Стандартний стан
              }`}>
              {/* Відображаємо зображення, якщо воно є */}
              {answer.image && (
                <img
                  src={answer.image}
                  alt={answer.content}
                  className="w-10 h-10 mb-2" // Розмір і відступи
                />
              )}
              {answer.content}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TypeTextSquare;
