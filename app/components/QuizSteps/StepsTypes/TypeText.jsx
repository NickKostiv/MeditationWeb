const TypeText = ({ answers, onAnswerClick, selectedIndex, questionIndex }) => {
  const getDynamicMargin = index => {
    if (index === 11) return "md:mt-[30px]";
    return "md:mt-[200px]";
  };

  return (
    <div
      className={`flex flex-col w-full max-w-[550px] justify-center m-auto text-white px-4 pt-[15px] pb-[80px] ${getDynamicMargin(
        questionIndex
      )}`}
      data-aos="fade-in">
      <div className="space-y-4 w-full flex m-auto flex-col">
        {answers.map((answer, index) => {
          const isSelected = selectedIndex === index;
          const hasSelection = selectedIndex !== undefined;

          return (
            <div
              key={`answer-${index}`}
              className="w-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}>
              <button
                onClick={() => onAnswerClick(index)}
                className={`flex items-center w-full p-4 text-[14px] text-left font-medium rounded-md transition-all duration-300 ${
                  isSelected
                    ? "bg-white text-black opacity-100 shadow-lg"
                    : hasSelection
                    ? "bg-gray-300 text-black opacity-30"
                    : "bg-white text-black opacity-100 hover:shadow-lg font-medium"
                }`}>
                {answer.image && (
                  <img
                    src={answer.image}
                    alt={answer.content}
                    className="w-6 h-6 mr-3"
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
