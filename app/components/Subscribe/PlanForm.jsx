import React, { useState } from "react";
import Image from "next/image";
import personIcon from "../../../public/person.png";
export default function PlanForm() {
  const [selectedPlan, setSelectedPlan] = useState("12-week"); // За замовчуванням другий план активний

  const handlePlanSelect = plan => {
    setSelectedPlan(plan);
  };
  return (
    <div className="mt-[40px] flex font-sans flex-col gap-4">
      {/* 1 Week Plan */}
      <label
        className={`flex items-center justify-between border rounded-[16px] cursor-pointer transition-all duration-300 ${
          selectedPlan === "1-week"
            ? "bg-[#36d7e13d] border-[#36d7e1]"
            : "bg-none border-[#46464d]"
        }`}
        onClick={() => handlePlanSelect("1-week")}>
        <input
          type="radio"
          name="plan"
          className="hidden"
          checked={selectedPlan === "1-week"}
          onChange={() => {}}
        />
        <div className="flex items-center gap-2">
          <div
            className={`ml-[15px] h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center border transition-all duration-300 ${
              selectedPlan === "1-week" ? " bg-black" : "border-gray-500"
            }`}>
            {selectedPlan === "1-week" && (
              <div className=" w-[15px] h-[15px] bg-[#36d7e1] rounded-full" />
            )}
          </div>
          <div>
            <p className="text-white font-bold">1-WEEK PLAN</p>
            <p className="text-gray-400">$13.99</p>
          </div>
        </div>
        <div className="py-[5px] h-full pr-[10px]">
          <div
            className={`flex items-center justify-center px-[20px] py-0 rounded-[10px] text-[14px] transition-all duration-300 ${
              selectedPlan === "1-week"
                ? "bg-[#12c1cc] text-white"
                : "bg-[#262730] text-white"
            }`}>
            <div className="flex text-white py-[5px] justify-center items-center">
              <span className="text-[12px] self-end pb-[15px] mr-[3px]">$</span>
              <p className="text-[50px] leading-[1]">1</p>
              <div className="flex-col ml-[5px]">
                <p className="text-[20px]">99</p>
                <span className="text-[12px]">per day</span>
              </div>
            </div>
          </div>
        </div>
      </label>

      {/* 12 Week Plan */}
      <label
        className={`flex items-center justify-between border rounded-[16px] cursor-pointer transition-all duration-300 ${
          selectedPlan === "12-week"
            ? "bg-[#36d7e13d] border-[#36d7e1]"
            : "bg-none border-[#46464d]"
        }`}
        onClick={() => handlePlanSelect("12-week")}>
        <input
          type="radio"
          name="plan"
          className="hidden"
          checked={selectedPlan === "12-week"}
          onChange={() => {}}
        />
        <div className="flex items-center gap-2 relative">
          <div
            className={`ml-[15px] h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center border transition-all duration-300 ${
              selectedPlan === "12-week" ? " bg-black" : "border-gray-500"
            }`}>
            {selectedPlan === "12-week" && (
              <div className="w-[15px] h-[15px] bg-[#36d7e1] rounded-full" />
            )}
          </div>
          <div>
            <span className="absolute top-[-25px] left-[10px] py-[2px] px-[5px] bg-[#12c1cc] text-white text-[12px] mb-2 font-semibold">
              Most popular
            </span>
            <p className="text-white font-bold">12-WEEK PLAN</p>
            <p className="text-gray-400">$49.99</p>
          </div>
        </div>
        <div className="py-[5px] h-full pr-[10px]">
          <div
            className={`flex items-center justify-center px-[20px] py-0 rounded-[10px] text-[14px] transition-all duration-300 ${
              selectedPlan === "12-week"
                ? "bg-[#12c1cc] text-white"
                : "bg-[#262730] text-white"
            }`}>
            <div className="flex text-white py-[5px] justify-center items-center">
              <span className="text-[12px] self-end pb-[15px] mr-[3px]">$</span>
              <p className="text-[50px] leading-[1]">0</p>
              <div className="flex-col ml-[5px]">
                <p className="text-[20px]">60</p>
                <span className="text-[12px]">per day</span>
              </div>
            </div>
          </div>
        </div>
      </label>

      {/* 4 Week Plan */}
      <label
        className={`flex items-center justify-between border rounded-[16px] cursor-pointer transition-all duration-300 ${
          selectedPlan === "4-week"
            ? "bg-[#36d7e13d] border-[#36d7e1]"
            : "bg-none border-[#46464d]"
        }`}
        onClick={() => handlePlanSelect("4-week")}>
        <input
          type="radio"
          name="plan"
          className="hidden"
          checked={selectedPlan === "4-week"}
          onChange={() => {}}
        />
        <div className="flex items-center gap-2">
          <div
            className={`ml-[15px] h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center border transition-all duration-300 ${
              selectedPlan === "4-week" ? " bg-black" : "border-gray-500"
            }`}>
            {selectedPlan === "4-week" && (
              <div className="w-[15px] h-[15px] bg-[#36d7e1] rounded-full" />
            )}
          </div>
          <div>
            <p className="text-white font-bold">4-WEEK PLAN</p>
            <p className="text-gray-400">$29.99</p>
          </div>
        </div>
        <div className="py-[5px] h-full pr-[10px]">
          <div
            className={`flex items-center justify-center px-[20px] py-0 rounded-[10px] text-[14px] transition-all duration-300 ${
              selectedPlan === "4-week"
                ? "bg-[#12c1cc] text-white"
                : "bg-[#262730] text-white"
            }`}>
            <div className="flex text-white py-[5px] justify-center items-center">
              <span className="text-[12px] self-end pb-[15px] mr-[3px]">$</span>
              <p className="text-[50px] leading-[1]">1</p>
              <div className="flex-col ml-[5px]">
                <p className="text-[20px]">11</p>
                <span className="text-[12px]">per day</span>
              </div>
            </div>
          </div>
        </div>
      </label>
      <div className="flex items-center justify-center">
        <Image
          src={personIcon}
          width={13}
          height={13}
          className="h-full max-h-[13px]"
          alt="person icon"
        />
        <p className="text-white text-[14px] text-center ml-[5px]">
          <span className="text-[#12c1cc] font-bold">1029 people</span> bought
          our plans in the last hour
        </p>
      </div>
    </div>
  );
}
