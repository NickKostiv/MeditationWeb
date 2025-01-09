"use client";

import React from "react";
import Image from "next/image";
import HeaderAnalyze from "../components/HeaderAnalyze";
import planImg1 from "../../public/plan1.png";
import planImg2 from "../../public/plan2.png";
import planImg3 from "../../public/plan3.png";

export default function PlanPage() {
  // const [isLoginLoaded, setIsLoginLoaded] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center  md:justify-start  text-white">
      <div className="w-full max-w-[550px]">
        <HeaderAnalyze />
        <div className="mt-[90px] flex-col px-6 items-center justify-between w-full">
          <div className="border-l-4 border-[#01caba] pl-3">
            <h2
              className="text-[24px] md:text-[27px] font-semibold uppercase font-sans leading-[120%] "
              style={{
                backgroundImage:
                  "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              We’ve created <br />
              a personalized <br />
              plan just for you
            </h2>
          </div>
          <div className="mt-[20px]">
            <p className="font-sans text-[22px] ">
              Made For <strong>You</strong>
            </p>
            <p className="text-[14px] mt-[5px] leading-[16px] font-light">
              Personal plans for beginners, created <br /> especially for you.
              Updated weekly.
            </p>
          </div>
          <div
            className="flex !overflow-x-scroll flex-row mt-5 max-w-fit  pb-[10px] transition-all duration-500 ease-in-out whitespace-nowrap z-[10]"
            style={{
              WebkitOverflowScrolling: "touch",
            }}>
            <Image
              src={planImg1}
              alt="Plan Image 1"
              width={190}
              height={210}
              className="w-full"
            />
            <Image
              src={planImg2}
              alt="Plan Image 2"
              width={190}
              height={210}
              className="w-full"
            />
            <Image
              src={planImg3}
              alt="Plan Image 3"
              width={190}
              height={210}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
