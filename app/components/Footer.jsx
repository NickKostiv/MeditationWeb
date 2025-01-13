import React from "react";
import Link from "next/link";
import Image from "next/image";
import AppsImg from "../../public/apps-img.png";

export default function Footer() {
  return (
    <footer className="mt-[80px]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col w-full max-w-[500px]">
            <h3 className="my-[15px] text-[19px] tracking-[0.09em] uppercase text-[#27E2EF] text-start">
              SLOWDIVE APP
            </h3>
            <p className="text-[16px] leading-[1.8em] text-gray-400 font-thin">
              Discover tranquility with Slowdive App: guided meditations,
              personalized content, communal sessions, and breathing exercises.
              Embrace mindfulness, track progress, and find peace. Stress less,
              sleep better, and live a happier life.
            </p>
            <Image
              src={AppsImg}
              alt="mobile markets rating"
              className="mt-[20px]"
            />
          </div>
          <div className="flex flex-col items-start justify-start text-start">
            <h3 className="my-[15px] text-[19px] tracking-[0.09em] uppercase text-[#27E2EF] text-start">
              Quick Links
            </h3>
            <div className="flex flex-col justify-center text-start ">
              <Link
                href="/"
                className="text-[15px] text-gray-400 font-thin leading-[1.8em]">
                About
              </Link>
              <Link
                href="/Support"
                className="text-[15px] text-gray-400 font-thin leading-[1.8em]">
                Help & Support
              </Link>

              <Link
                href="/Blog"
                className="text-[15px] text-gray-400 font-thin leading-[1.8em]">
                Blog
              </Link>
            </div>
          </div>
          <div className="flex flex-col ">
            <h3 className="my-[15px] text-[19px] tracking-[0.09em] uppercase text-[#27E2EF] text-start">
              Our Policies
            </h3>
            <div className="flex flex-col items-start justify-start text-start  ">
              <Link
                href="/Terms"
                className="text-[15px] text-gray-400 font-thin leading-[1.8em]">
                Terms of Use
              </Link>
              <Link
                href="/Privacy"
                className="text-[15px] text-gray-400 font-thin leading-[1.8em]">
                Privacy Policy
              </Link>

              <Link
                href="/Refund"
                className="text-[15px] text-gray-400 font-thin leading-[1.8em]">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <span className="text-[12px] leading-[1.2em] text-white font-thin">
          Copyright © 2024 Slowdive LTD. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
