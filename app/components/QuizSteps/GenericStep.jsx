const GenericStep = ({ question, answers, onAnswerClick, selectedAnswer }) => {
  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen text-white px-4 pt-[15px] pb-[80px]">
      <div className="flex flex-col mt-[15px] w-full max-w-[280px]">
        <h1
          className="text-[21px]  leading-[24px] text-center mb-10"
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
      <div className="space-y-4 w-full flex m-auto flex-col items-center">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(index)}
            className={`flex items-center w-full p-4 text-[16px] text-center font-normal rounded-md transition-all duration-300 ${
              selectedAnswer === null || selectedAnswer === index
                ? "bg-white text-black opacity-100"
                : "bg-white text-black opacity-30"
            }`}>
            {answer.image && (
              <img
                src={answer.image}
                alt={answer.content}
                className="w-[24px] h-[24px] mr-4 object-cover"
              />
            )}
            {answer.content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenericStep;
