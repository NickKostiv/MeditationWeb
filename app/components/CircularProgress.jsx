import React, { useState, useEffect } from "react";

const CircularProgress = ({ value, size = 80, strokeWidth = 10 }) => {
  const [animatedValue, setAnimatedValue] = useState(0); // Анімоване значення

  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedValue / 100) * circumference;

  useEffect(() => {
    // Анімація значення
    const increment = value / 50; // Крок зміни значення
    const interval = setInterval(() => {
      setAnimatedValue(prev => {
        const nextValue = Math.min(prev + increment, value);
        if (nextValue === value) clearInterval(interval);
        return nextValue;
      });
    }, 50); // Оновлення кожні 20 мс

    return () => clearInterval(interval); // Очищення таймера
  }, [value]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox="0 0 100 100">
        {/* Тло шкали */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth={strokeWidth}
        />
        {/* Прогрес */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={value >= 50 ? "#00FF00" : "#FF0000"} // Колір залежно від значення
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeDashoffset="0"
          strokeLinecap="round"
          style={{
            transition: "stroke-dasharray 0.3s ease", // Плавна анімація
          }}
        />
      </svg>

      {/* Текст прогресу */}
      <span className="absolute text-white text-sm font-semibold">
        {Math.round(animatedValue)}%
      </span>
    </div>
  );
};

export default CircularProgress;
