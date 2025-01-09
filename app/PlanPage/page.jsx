"use client";

import React from "react";
import Image from "next/image";
import HeaderAnalyze from "../components/HeaderAnalyze";

import planImg1 from "../../public/plan1.png";
import planImg2 from "../../public/plan2.png";
import planImg3 from "../../public/plan3.png";

import meditationImage1 from "../../public/1.webp";
import meditationImage2 from "../../public/2.webp";
import meditationImage3 from "../../public/3.webp";
import meditationImage4 from "../../public/4.webp";
import meditationImage5 from "../../public/5.webp";

import planEditorsChoiceImg from "../../public/plan__editors.webp";

import planChoiceImg1 from "../../public/plan__huge.webp";
import planChoiceImg2 from "../../public/plan__200.webp";
import planChoiceImg3 from "../../public/plan__700.webp";
import planChoiceImg4 from "../../public/plan__pranayama.webp";
import planChoiceImg5 from "../../public/plan__personalised.webp";

import planFooterImg from "../../public/plan__footer.webp";

export default function PlanPage({ onContinue }) {
  return (
    <div className="relative bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)]">
      <div className="overflow-hidden flex flex-col items-center  md:justify-start  text-white">
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
              className="scrollbar-custom flex !overflow-x-scroll flex-row mt-5 max-w-fit  pb-[10px] transition-all duration-500 ease-in-out whitespace-nowrap z-[10]"
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
            <div className="mt-[20px]">
              <p className="font-sans text-[22px] ">Based on your answers</p>
              <p className="text-[14px] mt-[5px] leading-[16px] font-light">
                After analyzing all your responses, we've curated <br />{" "}
                <strong> the perfect </strong> healing sounds and guided <br />{" "}
                meditations for you.
              </p>
            </div>
            <div
              className="scrollbar-custom flex overflow-x-scroll flex-row mt-5 max-w-fit pb-[10px] transition-all duration-500 ease-in-out whitespace-nowrap z-[10]"
              style={{
                WebkitOverflowScrolling: "touch",
              }}>
              <div className="mr-[12px] min-w-[143px] self-end relative">
                <Image
                  src={meditationImage1}
                  alt="Acception and Believes"
                  width={142}
                  height={190}
                  className="inline-block w-[142px] object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 text-start bg-opacity-50 px-2 rounded-b-md">
                  <h3 className="text-white font-sans text-[12px] font-normal leading-[13px] uppercase">
                    Acception and <br /> Believes
                  </h3>
                  <p className="text-gray-300 mt-[7px] text-[9px]">
                    12 minutes
                  </p>
                </div>
              </div>
              <div className="mr-[12px] min-w-[143px] self-end relative">
                <Image
                  src={meditationImage2}
                  alt="The Inner Peace"
                  width={142}
                  height={190}
                  className="inline-block w-[142px] object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 text-start bg-opacity-50 px-2 rounded-b-md">
                  <h3 className="text-white font-sans text-[12px] font-normal leading-[13px] uppercase">
                    The Inner Peace
                  </h3>
                  <p className="text-gray-300 mt-[7px] text-[9px]">
                    20 minutes
                  </p>
                </div>
              </div>
              <div className="mr-[12px] min-w-[143px] self-end relative">
                <Image
                  src={meditationImage3}
                  alt="I Am Love"
                  width={142}
                  height={190}
                  className="inline-block w-[142px] object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 text-start bg-opacity-50 px-2 rounded-b-md">
                  <h3 className="text-white font-sans text-[12px] font-normal leading-[13px] uppercase">
                    I Am Love
                  </h3>
                  <p className="text-gray-300 mt-[7px] text-[9px]">
                    15 minutes
                  </p>
                </div>
              </div>
              <div className="mr-[12px] min-w-[143px] self-end relative">
                <Image
                  src={meditationImage4}
                  alt="Holotropic Breathwork"
                  width={142}
                  height={190}
                  className="inline-block w-[142px] object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 text-start bg-opacity-50 px-2 rounded-b-md">
                  <h3 className="text-white font-sans text-[12px] font-normal leading-[13px] uppercase">
                    Holotropic <br /> Breathwork
                  </h3>
                  <p className="text-gray-300 mt-[7px] text-[9px]">
                    32 minutes
                  </p>
                </div>
              </div>
              <div className="mr-[12px] min-w-[143px] self-end relative">
                <Image
                  src={meditationImage5}
                  alt="Inner Peace"
                  width={142}
                  height={190}
                  className="inline-block w-[142px] object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 text-start bg-opacity-50 px-2 rounded-b-md">
                  <h3 className="text-white font-sans text-[12px] font-normal leading-[13px] uppercase">
                    Inner Peace
                  </h3>
                  <p className="text-gray-300 mt-[7px] text-[9px]">
                    20 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[26px]  px-[20px] flex flex-col items-center  md:justify-start bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)]">
        <div className="w-full max-w-[550px]">
          <Image
            src={planEditorsChoiceImg}
            alt="PlanEditroImg"
            width={540}
            height={140}
          />
          <div className="flex justify-center gap-[35px] md:gap-[150px] items-center font-sans text-white w-full mt-[30px]">
            <div className="flex flex-col items-center text-center">
              <span className="text-[40px] font-bold">1000+</span>
              <p className="text-[14px] font-normal tracking-[-0.02px] leading-[1.5]">
                Tracks to use <br /> in your <strong>daily</strong> <br />{" "}
                practice
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[40px] font-bold">100+</span>
              <p className="text-[14px] font-normal tracking-[-0.02px] leading-[1.5]">
                Therapists and <br /> coaches to <br /> <strong>guide</strong>{" "}
                you
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col w-full max-w-[550px] mt-[40px] font-montserrat">
          <div className="flex">
            <div className="min-w-[86px] h-[90px] max-h-[90px]">
              <Image
                src={planChoiceImg1}
                width={86}
                height={90}
                alt={planChoiceImg1}
              />
            </div>
            <div className="flex-col  ml-[20px] text-white my-auto">
              <p className="text-[24px] font-semibold leading-[24px] mb-[13px]">
                Huge collection of healing sounds
              </p>
              <p className="text-[15px] md:text-[18px]  font-thin leading-[18px]">
                Discover a vast array of sounds and frequencies for all chakra
                systems
              </p>
            </div>
          </div>
          <div className="flex mt-[30px]">
            <div className="min-w-[86px] h-[90px] max-h-[90px]">
              <Image
                src={planChoiceImg2}
                width={86}
                height={90}
                alt={planChoiceImg2}
              />
            </div>
            <div className="flex-col  ml-[20px] text-white my-auto">
              <p className=" text-[24px] font-semibold leading-[24px] mb-[13px]">
                200+ guided meditations
              </p>
              <p className="text-[15px] md:text-[18px]  font-thin leading-[18px]">
                These meditations are an excellent starting point for beginners
              </p>
            </div>
          </div>
          <div className="flex mt-[30px]">
            <div className="min-w-[86px] h-[90px] max-h-[90px]">
              <Image
                src={planChoiceImg3}
                width={86}
                height={90}
                alt={planChoiceImg3}
              />
            </div>
            <div className="flex-col  ml-[20px] text-white my-auto">
              <p className=" text-[24px] font-semibold leading-[24px] mb-[13px]">
                700+ mantras and shamanic music
              </p>
              <p className="text-[15px] md:text-[18px]  font-thin leading-[18px]">
                Explore a rich collection of powerful mantras designed to help
                you find inner peace
              </p>
            </div>
          </div>
          <div className="flex mt-[30px]">
            <div className="min-w-[86px] h-[90px] max-h-[90px]">
              <Image
                src={planChoiceImg4}
                width={86}
                height={90}
                alt={planChoiceImg4}
              />
            </div>
            <div className="flex-col  ml-[20px] text-white my-auto">
              <p className=" text-[24px] font-semibold leading-[24px] mb-[13px]">
                Breathing exercises and pranayama
              </p>
              <p className="text-[15px] md:text-[18px]  font-thin leading-[18px]">
                Breathwork can reduce stress, anxiety, fatigue, can improve lung
                function, focus, and sleep
              </p>
            </div>
          </div>
          <div className="flex mt-[30px]">
            <div className="min-w-[86px] h-[90px] max-h-[90px]">
              <Image
                src={planChoiceImg5}
                width={86}
                height={90}
                alt={planChoiceImg5}
              />
            </div>
            <div className="flex-col  ml-[20px] text-white my-auto">
              <p className=" text-[24px] font-semibold leading-[24px] mb-[13px]">
                Personalised meditation plan
              </p>
              <p className="text-[15px] md:text-[18px]  font-thin leading-[18px]">
                A customized program with a combination of guided meditations,
                mantras & sounds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] px-[20px] pb-[40px]">
        <div className="flex-col mx-auto pt-[40px] w-full max-w-[550px]">
          <Image
            src={planFooterImg}
            width={540}
            height={145}
            alt="apps footer"
          />

          <div className="flex justify-between text-white mt-[20px]">
            <div className="flex flex-col items-center text-center">
              <span className="text-[22px] font-bold">30.000.000+</span>
              <p className="text-[14px] font-normal tracking-[-0.02px] leading-[1.5]">
                Downloads
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[22px] font-bold">4.8</span>
              <p className="text-[14px] font-normal tracking-[-0.02px] leading-[1.5]">
                Rating
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[22px] font-bold">172</span>
              <p className="text-[14px] font-normal tracking-[-0.02px] leading-[1.5]">
                Countries
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4646464d] mx-auto w-[full] max-w-[550px] sticky bottom-0 left-0 right-0 z-30 text-right p-4 rounded-t-[30px]">
        <button
          className="relative  inline-flex mx-auto w-full max-w-[550px] items-center justify-center bg-[#2fd1db] text-white text-[22px] font-semibold uppercase leading-[18px] py-[16px] px-5 rounded-[64px] shadow-none transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-700"
          onClick={onContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
}
