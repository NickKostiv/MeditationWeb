"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.gif";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
  display: "swap",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header
      className={`${montserrat.className} flex items-center w-full py-4 px-6 absolute top-0 z-50 bg-transparent`}>
      {/* Лого зліва */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>
      </div>

      <nav className="mx-auto hidden md:block">
        <ul className="flex space-x-8 text-white text-lg">
          <li>
            <Link
              href="/how-it-works"
              className="hover:opacity-75 text-[10px] font-normal tracking-[3px]">
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className="hover:opacity-75 text-[10px] font-normal tracking-[3px]">
              REVIEWS
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="hover:opacity-75 text-[10px] font-normal tracking-[3px]">
              SUPPORT
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:opacity-75 text-[10px] font-normal tracking-[3px]">
              BLOG
            </Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto md:hidden">
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

      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-[40%] bg-black text-white flex flex-col items-start py-6 px-4 z-40 shadow-lg">
          <button
            className="self-end text-white text-2xl mb-4 focus:outline-none"
            aria-label="Close Menu"
            onClick={() => setIsMenuOpen(false)}>
            &times;
          </button>
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link
                href="/how-it-works"
                className="hover:opacity-75 text-[10px] font-normal tracking-[3px]"
                onClick={() => setIsMenuOpen(false)}>
                HOW IT WORKS
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="hover:opacity-75 text-[10px] font-normal tracking-[3px]"
                onClick={() => setIsMenuOpen(false)}>
                REVIEWS
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:opacity-75 text-[10px] font-normal tracking-[3px]"
                onClick={() => setIsMenuOpen(false)}>
                SUPPORT
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:opacity-75 text-[10px] font-normal tracking-[3px]"
                onClick={() => setIsMenuOpen(false)}>
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
