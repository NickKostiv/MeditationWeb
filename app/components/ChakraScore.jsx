import React, { useEffect, useState } from "react";

const ChakraScore = ({ selectedOptions }) => {
  const [chakraScore, setChakraScore] = useState(0);

  useEffect(() => {
    const relevantSteps = Array.from({ length: 14 }, (_, i) => i + 1);

    let totalScore = 0;
    let maxScore = 0;

    relevantSteps.forEach(step => {
      if (selectedOptions[step]) {
        const { score = 0 } = selectedOptions[step];
        totalScore += score;
        maxScore += 3;
      }
    });

    const percentage = (totalScore / maxScore) * 100;
    setChakraScore(percentage);
  }, [selectedOptions]);

  return (
    <div style={{ width: "80px", height: "80px" }}>
      <CircularProgressbar
        value={chakraScore}
        text={`${Math.round(chakraScore)}%`}
        styles={buildStyles({
          pathColor: chakraScore >= 50 ? "green" : "red",
          textColor: "white",
          trailColor: "rgba(255, 255, 255, 0.2)",
          textSize: "16px",
        })}
      />
    </div>
  );
};

export default ChakraScore;
