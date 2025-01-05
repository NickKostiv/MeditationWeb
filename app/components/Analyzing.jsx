import React, { useState, useEffect } from "react";

const AnalyzingPage = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish(); // Перехід на наступну сторінку після завершення прогресу
          return 100;
        }
        return prev + 5; // Збільшуємо прогрес
      });
    }, 100); // Оновлюємо кожні 100мс

    return () => clearInterval(interval); // Чистимо інтервал після завершення
  }, [onFinish]);

  return (
    <div className="flex w-full max-w-[550px] flex-col items-center justify-center min-h-screen bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] text-white">
      <div className="text-center">
        <img
          src="/logo.webp"
          alt="Slowdive"
          className="w-20 h-20 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold">Great! Let’s see your results 🙌</h1>
        <p className="mt-4 text-base">
          Your answers can help us get a good sense of{" "}
          <strong>which chakra you might be struggling with the most</strong>.
        </p>
      </div>
      <div className="w-full max-w-md mt-10">
        <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-teal-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2">Processing the answers...</p>
      </div>
    </div>
  );
};

export default AnalyzingPage;
