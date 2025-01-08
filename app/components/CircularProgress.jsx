import React, { useState, useEffect } from "react";
import bgImgCircular from "../../public/lotus-bg.png";

const CircularProgress = ({ value, size = 80, strokeWidth = 10 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedValue / 100) * circumference;

  useEffect(() => {
    const increment = value / 50;
    const interval = setInterval(() => {
      setAnimatedValue(prev => {
        const nextValue = Math.min(prev + increment, value);
        if (nextValue === value) clearInterval(interval);
        return nextValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
      className="relative flex items-center justify-center bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImgCircular.src})`,
        backgroundSize: "50px 50px",
      }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth={strokeWidth}
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={value >= 50 ? "#00FF00" : "#FF0000"}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeDashoffset="0"
          strokeLinecap="round"
          style={{
            transition: "stroke-dasharray 0.3s ease",
          }}
        />
      </svg>

      <span className="absolute text-white text-[23px] font-medium">
        {Math.round(animatedValue)}%
      </span>
    </div>
  );
};

export default CircularProgress;
