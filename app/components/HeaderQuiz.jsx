"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.gif";

const HeaderQuiz = ({ currentStep, onBack }) => {
  const totalSteps = 22; // Загальна кількість кроків
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col w-full max-w-[540px] p-4 text-white">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Back Button and Logo Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-white text-xl"
            aria-label="Go back">
            ←
          </button>
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-sm font-bold">Slowdive</span>
            <span className="text-xs text-gray-400">Meditation & Mantra</span>
          </div>
        </div>

        {/* Step Counter */}
        <div className="text-sm font-bold">
          {currentStep}/{totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-[3px] mt-4 rounded-full overflow-hidden">
        <div
          className="bg-[#02bfb9] border-[1px] border-[#02bfb9] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default HeaderQuiz;
