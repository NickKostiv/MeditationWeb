"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.webp";
import SearchIcon from "../../../public/icons8-search.svg";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
  display: "swap",
});

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="font-geometria w-full bg-black">
      {/* Верхній хедер */}
      <div className="flex items-center w-full py-[20px]">
        {/* Лого */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[50px] h-[50px]"
            />
          </Link>
        </div>

        {/* Навігація для десктопу */}
        {!isSearchOpen && (
          <nav className="ml-[50px] hidden lg:block">
            <ul className="flex space-x-8 text-white text-lg">
              <li>
                <Link
                  href="/MINDFULNESS"
                  className="hover:opacity-75 text-[20px] font-thin">
                  MINDFULNESS
                </Link>
              </li>
              <li>
                <Link
                  href="/BREATHING"
                  className="hover:opacity-75 text-[20px] font-thin">
                  BREATHING
                </Link>
              </li>
              <li>
                <Link
                  href="/WELL-BEING"
                  className="hover:opacity-75 text-[20px] font-thin">
                  WELL-BEING
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Пошук */}
        {isSearchOpen ? (
          <div className="flex items-center justify-between w-full max-w-[800px] px-4">
            <div className="flex-shrink-0"></div>
            <input
              type="text"
              placeholder="Search ..."
              className="flex-grow bg-black text-white px-4 py-2 text-lg outline-none"
            />
            <button
              aria-label="Close Search"
              className="text-[#27E2EF] text-3xl focus:outline-none"
              onClick={() => setIsSearchOpen(false)}>
              &times;
            </button>
          </div>
        ) : (
          <button
            className="hidden lg:flex ml-[10px] text-[#27E2EF]"
            onClick={() => setIsSearchOpen(true)}>
            <Image src={SearchIcon} alt="Search" width={30} height={30} />
          </button>
        )}

        {/* Бургер-меню для мобільних */}
        <div className="ml-auto lg:hidden flex items-center space-x-4">
          {!isSearchOpen && (
            <button
              aria-label="Search"
              className="text-[#27E2EF] focus:outline-none"
              onClick={() => {
                setIsMenuOpen(false);
                setIsSearchOpen(true);
              }}>
              <Image
                src={SearchIcon}
                alt="Search Icon"
                width={30}
                height={30}
              />
            </button>
          )}
          {!isSearchOpen && (
            <button
              className="text-[#27E2EF] focus:outline-none"
              aria-label="Toggle Menu"
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
          )}
        </div>
      </div>

      {/* Навбар меню (відкривається вниз) */}
      {!isSearchOpen && (
        <div
          className={`transition-all duration-300 ease-out overflow-hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}>
          <div className="w-full bg-black text-white border-t-[2px] border-[#B7CE63]">
            <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
              <li>
                <Link
                  href="/MINDFULNESS"
                  className="hover:opacity-75 text-[20px] font-thin tracking-[2px]"
                  onClick={() => setIsMenuOpen(false)}>
                  MINDFULNESS
                </Link>
              </li>
              <li>
                <Link
                  href="/BREATHING"
                  className="hover:opacity-75 text-[20px] font-thin tracking-[2px]"
                  onClick={() => setIsMenuOpen(false)}>
                  BREATHING
                </Link>
              </li>
              <li>
                <Link
                  href="/WELL-BEING"
                  className="hover:opacity-75 text-[20px] font-thin tracking-[2px]"
                  onClick={() => setIsMenuOpen(false)}>
                  WELL-BEING
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;
