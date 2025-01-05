"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import backIcon from "../../public/back.svg";

const HeaderQuiz = ({ currentStep, totalSteps = 22, onBack }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="flex flex-col w-full max-w-[540px] mt-[20px] px-[20px] md:px-0 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className={`text-white text-xl ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Go back"
            disabled={currentStep === 1}>
            <Image src={backIcon} alt="back-icon" width={24} height={24} />
          </button>
          <Image src={logo} alt="Logo" width={31} height={32} />
          <div className="flex flex-col text-shadow">
            <span className="text-sm font-bold">Slowdive</span>
            <span className="text-xs text-gray-400">Meditation & Mantra</span>
          </div>
        </div>

        <div className="text-sm font-bold">
          {currentStep}/{totalSteps}
        </div>
      </div>

      <div className="w-full bg-gray-700 h-[3px] mt-4 rounded-full overflow-hidden">
        <div
          className="bg-[#02bfb9] border-[1px] border-[#02bfb9] progress-bar"
          style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default HeaderQuiz;
