"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import backIcon from "../../public/back.svg";
import closeIcon from "../../public/close-icon.svg";
import logo from "../../public/logo.webp";

const HeaderAnalyze = ({ onBack, currentStep }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleBackClick = () => {
    if (pathname === "/PlanPage" || pathname === "/SubscribePage") {
      router.back();
    } else {
      onBack();
    }
  };

  return (
    <>
      <header className="flex items-center w-full max-w-[550px] py-4 px-6 absolute top-0 z-50 bg-transparent">
        <div className="flex items-center justify-center">
          <button
            onClick={handleBackClick}
            className={`text-white text-xl ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Go back"
            disabled={currentStep === 1}>
            <Image src={backIcon} alt="back-icon" width={24} height={24} />
          </button>

          {(pathname === "/PlanPage" || pathname === "/SubscribePage") && (
            <div className="flex items-center ml-4">
              <Image src={logo} alt="Logo" width={30} height={30} />
              <div className="ml-2">
                <p className="text-white text-[15px] font-medium font-sans">
                  Slowdive
                </p>
                <p className="text-white text-[13px] font-normal font-sans">
                  Meditation & Mantra
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="ml-auto">
          <button
            className="text-white focus:outline-none"
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-full max-w-[330px] bg-white text-black flex flex-col items-start py-6 px-4 z-50 shadow-lg">
          <button
            className="self-start text-black text-2xl mb-4 focus:outline-none"
            aria-label="Close Menu"
            onClick={() => setIsMenuOpen(false)}>
            <Image src={closeIcon} alt="back-icon" width={20} height={20} />
          </button>
          <ul className="flex flex-col space-y-4 text-lg pt-[90px] px-[25px]">
            <li>
              <Link
                href="/MainPage"
                className="hover:opacity-75 text-[24px] md:text-[24px] font-semibold tracking-[0.5px]"
                onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/TOS"
                className="hover:opacity-75 text-[24px] md:text-[24px] font-semibold tracking-[0.5px]"
                onClick={() => setIsMenuOpen(false)}>
                Terms of Services
              </Link>
            </li>
            <li>
              <Link
                href="/Privacy"
                className="hover:opacity-75 text-[24px] md:text-[24px] font-semibold tracking-[0.5px]"
                onClick={() => setIsMenuOpen(false)}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/Refund"
                className="hover:opacity-75 text-[24px] md:text-[24px] font-semibold tracking-[0.5px]"
                onClick={() => setIsMenuOpen(false)}>
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderAnalyze;
