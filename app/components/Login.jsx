"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../public/logo.webp";
import logoText from "../../public/logo-text.svg";
import correctIcon from "../../public/correctIcon.png";
import lockIcon from "../../public/lock.svg";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = e => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleContinue = () => {
    router.push("/PlanPage");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[radial-gradient(77.28%_53.46%_at_80.97%_37.09%,rgb(12,38,18)_0%,rgb(8,1,19)_100%)] flex flex-col items-center md:justify-start text-white">
      <div className="px-[20px] w-full max-w-[550px] mt-[50px]  rounded-md text-center">
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={48}
            height={48}
            className="mx-auto mb-[20px] md:w-[58px] md:h-[58px]"
          />
          <Image
            src={logoText}
            alt="Logo"
            width={150}
            height={17}
            className="mx-auto mt-[15px] md:w-[216px] md:h-[24px]"
          />
          <h1
            className="text-[19px] md:text-[22px] uppercase font-extrabold font-sans mt-[60px] mb-[20px] text-center"
            style={{
              backgroundImage:
                "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            Save your progress and receive your personalized plan
          </h1>
        </div>

        {/* Form */}
        <form className="flex flex-col items-center w-full mt-4 md:mt-[50px]">
          {/* First Name */}
          <div className="flex relative mb-5 p-0 px-[10px] w-full items-center border-2 border-[hsla(0,0%,100%,0.67)] rounded-[17px] transition-all duration-[0.4s] ease-in-out">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="w-full p-[15px] md:p-[20px] text-[16px] md:text-[20px] bg-transparent text-white outline-none"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            {firstName.length >= 2 && (
              <Image
                src={correctIcon}
                alt="Valid"
                width={28}
                height={28}
                className="absolute right-[10px]"
              />
            )}
          </div>

          {/* Email */}
          {firstName.length >= 2 && (
            <div data-aos="fade-up" data-aos-delay="200" className="w-full">
              <div className="flex relative mb-5 p-0 px-[10px] w-full items-center border-2 border-[hsla(0,0%,100%,0.67)] rounded-[17px] transition-all duration-[0.4s] ease-in-out">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-[15px] md:p-[20px] text-[16px] md:text-[20px] bg-transparent text-white outline-none"
                  value={email}
                  onChange={handleEmailChange}
                />
                {isEmailValid && (
                  <Image
                    src={correctIcon}
                    alt="Valid"
                    width={28}
                    height={28}
                    className="absolute right-[10px]"
                  />
                )}
              </div>
              <div className="flex md:mt-[20px]">
                <p className="text-[12px] md:text-[14px] flex font-sans text-start leading-[15px] md:leading-[20px] font-normal">
                  <Image
                    src={lockIcon}
                    alt="LockIcon"
                    width={14}
                    height={14}
                    className="mr-[10px]"
                  />
                  Slowdive respects your privacy. We do not sell or rent your
                  personal information.
                </p>
              </div>
            </div>
          )}
        </form>
        {/* Form */}
        {isEmailValid && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[550px] bg-[#4646464d] z-30 text-center py-[16px] px-[20px] rounded-t-[30px]">
            <button
              className="relative w-full max-w-[550px] font-sans inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[20px] md:text-[24px] font-semibold uppercase  py-[7px] px-[20px] rounded-[64px] shadow-none transition-all duration-300 ease-in-out focus:outline-none active:scale-90"
              onClick={handleContinue}>
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
