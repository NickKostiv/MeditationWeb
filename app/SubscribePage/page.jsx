"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeaderAnalyze from "../components/HeaderAnalyze";
import PlanForm from "../components/Subscribe/PlanForm";
import PaymentForm from "../components/Subscribe/PaymentForm";

import chartImg from "../../public/subscribe-chart.svg";
import StartImg from "../../public/stars2.webp";
import RoundedImages from "../../public/subscribe__downloads.webp";
import IgorAva from "../../public/avatar3.png";
import LindaAva from "../../public/avatar5.png";
import PatriciaAva from "../../public/avatar2.png";
import Stars from "../../public/stars.svg";
import GuaranteeImg from "../../public/guarantee.webp";
import PayMethodsImg from "../../public/pay-methods.svg";
import MobilesImg from "../../public/img-s3.png";

import heart from "../../public/heart.svg";
import sleep from "../../public/sleep.svg";
import infinity from "../../public/infinity.svg";
import daimond from "../../public/daimond.svg";
import calendar from "../../public/calendar.svg";
import download from "../../public/download.svg";

export default function page() {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/");
  };
  return (
    <div className="relative bg-black flex flex-col items-center justify-center">
      <HeaderAnalyze />
      <div className="w-full max-w-[550px] px-[20px] mt-[80px]">
        <h2 className="text-white text-center text-[20px] font-sans font-normal">
          <span className="font-bold">80%</span> of our users mention <br />{" "}
          visible changes{" "}
          <span className="text-[#59e9f2] font-bold">just in 4 weeks! </span>
        </h2>
        <Image src={chartImg} alt="chart image" className="mt-[20px] mx-auto" />
        <PlanForm />
        <div className="relative mt-[40px]">
          {/* Верхній текст */}
          <div className="absolute top-[90px] sm:top-[120px] w-full flex flex-col items-center text-center">
            <p className="text-white text-[14px] font-normal leading-[15px]">
              users started their <br /> spiritual journey with us
            </p>
          </div>

          {/* Зображення */}
          <Image src={StartImg} alt="Stars" className="w-full" />

          {/* Текст посередині під зірочками */}
          <div className="absolute bottom-[120px] left-[-90px] sm:bottom-[190px] sm:left-[-130px] w-full flex justify-center">
            <p className="text-white text-[14px] font-medium">4.8 out of 5</p>
          </div>

          {/* Нижній текст */}
          <p className="absolute sm:bottom-[30px] bottom-2 w-full left-1/2 transform -translate-x-1/2 text-white text-center text-[16px] md:text-[21px] font-medium">
            113,000+ 5-star ratings from <br /> happy users 😍
          </p>
        </div>

        <div className="mt-[40px]">
          <Image
            src={RoundedImages}
            alt="chart image"
            className="mt-[20px] mx-auto"
          />
        </div>

        <div className="flex flex-col gap-6 mt-[30px] font-sans ">
          {/* Review 1 */}
          <div className="flex flex-col  bg-[#131515] rounded-[14px] p-[16px] text-white">
            <div className="flex gap-4">
              <Image src={LindaAva} alt="Linda image" width={45} height={45} />
              <div className="">
                <h3 className="font-bold">Linda</h3>
                <p className="text-gray-400 text-[11px] md:text-[13px]">
                  Slowdive member for 3 months
                </p>
              </div>
              <div className="ml-auto">
                <Image
                  src={Stars}
                  width={100}
                  height={90}
                  alt="rating 5 stars"
                />
              </div>
            </div>
            <p className="mt-3 text-[15px] font-normal leading-[1.2] md:text-[17px]">
              Slowdive meditations were a game-changer during my recovery from
              surgery. It helped me manage pain and stay calm throughout the
              healing process.
            </p>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col   justify-between bg-[#131515] rounded-[14px] p-[16px] text-white">
            <div className="flex items-start gap-4">
              <Image
                src={PatriciaAva}
                alt="Linda image"
                width={45}
                height={45}
              />
              <div className="">
                <h3 className="font-bold">Patricia</h3>
                <p className="text-gray-400 text-[11px] md:text-[13px]">
                  Slowdive member for 2 years
                </p>
              </div>
              <div className="ml-auto">
                <Image
                  src={Stars}
                  width={100}
                  height={90}
                  alt="rating 5 stars"
                />
              </div>
            </div>
            <p className="mt-3 text-[15px] font-normal leading-[1.2] md:text-[17px]">
              This course helped me untangle my thoughts during a particularly
              tough quarter at work. I’ve gained focus and a new perspective on
              managing stress.
            </p>
          </div>

          {/* Review 3 */}
          <div className="flex flex-col   justify-between bg-[#131515] rounded-[14px] p-[16px] text-white">
            <div className="flex items-start gap-4">
              <Image src={IgorAva} alt="Linda image" width={45} height={45} />
              <div className="">
                <h3 className="font-bold">Igor</h3>
                <p className="text-gray-400 text-[11px] md:text-[13px]">
                  Slowdive member for 1 year
                </p>
              </div>
              <div className="ml-auto">
                <Image
                  src={Stars}
                  width={100}
                  height={90}
                  alt="rating 5 stars"
                />
              </div>
            </div>
            <p className="mt-3 text-[15px] font-normal leading-[1.2] md:text-[17px]">
              After just one week into the Chakra Cleansing course, I felt a
              sense of clarity I haven’t experienced in years. It’s as if a
              weight has been lifted off my shoulders.
            </p>
          </div>
        </div>

        <div className="text-white text-center flex flex-col mt-[30px] font-sans ">
          <h2 className=" text-[24px] font-bold leading-[133%] ">
            Payment method
          </h2>
          <p className="mt-[15px] text-[14px] font-normal leading-[20px]">
            If you don’t find it valuable, we’ll provide you with a{" "}
            <strong>full</strong> refund.
          </p>

          <PaymentForm />
        </div>

        <div className="mt-[25px] flex flex-col bg-[#24262b] p-[19px] rounded-[32px]">
          <div className="flex gap-[15px] border-b-[1px] border-[#ffffff98]">
            <Image
              src={GuaranteeImg}
              alt="guarantee image"
              width={90}
              height={90}
              className="w-full max-w-[90px] h-full min-h-[90px]"
            />
            <div className="flex flex-col text-white font-sans mb-[15px] leading-[120%">
              <p className="text-[15px] mb-[5px] font-medium">
                100% Money-Back Guarantee
              </p>
              <span className="text-[10px] font-normal ">
                We're so confident that Slowdive ™ can help you improve your
                mental health that we'll return your money if you don't see
                visible results in 4 weeks (and can prove that you followed our
                plan).
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-[15px]">
            <p className="text-white text-[13px] mb-[5px] font-medium">
              Guaranteed Safe Checkout
            </p>
            <Image src={PayMethodsImg} height={22} alt="pay methods img" />
          </div>
        </div>

        <div className="mt-[15px]">
          <Image
            src={MobilesImg}
            alt="mobiles img"
            className="relative z-0 w-full max-w-[289px] h-full min-h-[267px] mx-auto"
          />
          <div className="mt-[-65px] relative z-10 flex flex-col bg-[rgba(36,38,43,0.8)] backdrop-blur-[7px] p-[19px] rounded-[32px]">
            <p className="text-[23px] text-center text-white leading-[120%] font-medium mb-[20px]">
              Included in <br /> your membership
            </p>

            <div className="flex items-center mb-[15px]">
              <Image
                src={heart}
                width={27}
                height={27}
                alt="heart icon"
                className="w-full max-w-[27px] h-full min-h-[27px]"
              />
              <p className="pl-[15px] text-white text-[16px] font-light">
                Slowdive understands your emotional needs and helps you feel
                <span className="font-bold"> better in just 3 minutes</span>
              </p>
            </div>
            <div className="flex items-center mb-[15px]">
              <Image
                src={sleep}
                width={27}
                height={27}
                alt="heart icon"
                className="w-full max-w-[27px] h-full min-h-[27px]"
              />
              <p className="pl-[15px] text-white text-[16px] font-light">
                Fall asleep,{" "}
                <span className="font-bold">reduce stress and anxiety</span>,
                and find peace effortlessly whenever you need it
              </p>
            </div>
            <div className="flex items-center mb-[15px]">
              <Image
                src={infinity}
                width={27}
                height={27}
                alt="heart icon"
                className="w-full max-w-[27px] h-full min-h-[27px]"
              />
              <p className="pl-[15px] text-white text-[16px] font-light">
                <span className="font-bold">Unlimited access</span> to 1000+
                meditations, life coaching, stories, music & nature sounds.
              </p>
            </div>
            <div className="flex items-center mb-[15px]">
              <Image
                src={daimond}
                width={27}
                height={27}
                alt="heart icon"
                className="w-full max-w-[27px] h-full min-h-[27px]"
              />
              <p className="pl-[15px] text-white text-[16px] font-light">
                Exclusive content from{" "}
                <span className="font-bold">top mindfulness experts</span>,
                psychologists, and therapists
              </p>
            </div>
            <div className="flex items-center mb-[15px]">
              <Image
                src={calendar}
                width={27}
                height={27}
                alt="heart icon"
                className="w-full max-w-[27px] h-full min-h-[27px]"
              />
              <p className="pl-[15px] text-white text-[16px] font-light">
                New meditations and sounds added{" "}
                <span className="font-bold">every week</span>
              </p>
            </div>
            <div className="flex items-center mb-[15px]">
              <Image
                src={download}
                width={27}
                height={27}
                alt="heart icon"
                className="w-full max-w-[27px] h-full min-h-[27px]"
              />
              <p className="pl-[15px] text-white text-[16px] font-light">
                Download content for{" "}
                <span className="font-bold">offline use</span> during meditation
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white mt-[30px]">
          <p className="text-[12px]">
            After your 12-week plan intro offer ends, you will be automatically
            enrolled in our 12-week plan subscription at the price of $49.99.
          </p>
          <p className="text-[12px] font-bold mt-[10px]">Secure checkout</p>
          <p className="text-[12px] mt-[10px]">
            All information is encrypted and transmitted using Secure Sockets
            Layer protocol.
          </p>
        </div>
        <div className="flex justify-start items-center mt-4">
          <Link
            href="/terms"
            className="text-[#5F6364] text-[12px] underline font-sans mx-2">
            Terms & Conditions
          </Link>

          <Link
            href="/privacy"
            className="text-[#5F6364] text-[12px] underline font-sans mx-2">
            Privacy Policy
          </Link>
          <p className="text-[12px] text-gray-400">and</p>
          <Link
            href="/privacy"
            className="text-[#5F6364] text-[12px] underline font-sans mx-2">
            Refund Policy
          </Link>
        </div>
      </div>
      <div className="bg-[#4646464d] w-full max-w-[550px] sticky bottom-0 left-0 right-0 z-30 text-right p-4 rounded-t-[30px]">
        <button
          className="relative w-full max-w-[550px] inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[22px] font-semibold uppercase leading-[18px] py-[16px] px-5 rounded-[64px] shadow-none transition-transform duration-300 ease-in-out focus:outline-none active:scale-90"
          onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
}
