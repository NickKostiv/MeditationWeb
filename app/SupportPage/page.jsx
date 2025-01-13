import React from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/SupportPage/Header";
import TroubleshootingIcon from "../../public/troubleshooting.svg";
import AccountIcon from "../../public/account.svg";
import logo from "../../public/logo.webp";
import insta from "../../public/insta.svg";
import fb from "../../public/fb.svg";

export default function page() {
  return (
    <div className="">
      <div
        className="relative font-geometria bg-[url('/support-bg.png')] bg-cover bg-top bg-no-repeat py-4 md:pt-[58px] px-[20px] md:px-[40px] lg:px-[130px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%), url('/support-bg.png')",
        }}>
        <Header />
      </div>
      <div className=" bg-black flex flex-col w-full justify-center items-center px-[20px] md:px-[30px]">
        <div className="px-[20px] md:px-[30px] py-[60px] bg-black bg-opacity-60 relative z-90 mt-[-130px] z-90 w-full max-w-[960px] rounded-[21px] border-[1px] border-[#333333] flex flex-col items-center justify-center">
          <div className="w-full max-w-[382px]">
            <h3 className="text-white text-center text-[25px] mb-[30px]">
              Explore Mindfulness
            </h3>
            <p className="text-white text-[16px] mb-[30px] text-center">
              Dive into serenity with our latest articles on meditation, sound
              healing, and more.
            </p>
          </div>
          <Link
            href="/QuizPage"
            className="flex items-center bg-white justify-center text-center mt-[15px] py-[8px] px-[30px] border-[2px] border-white hover:bg-gray-300 hover:border-transparent transition-all duration-300 rounded-[21px] relative group">
            <span className="text-black text-[14px] font-bold">
              About Slowdive
            </span>
            <div className="flex items-center justify-center opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] w-full max-w-[960px] mt-[30px]">
          <Link
            href={"/"}
            className="flex flex-col items-center justify-center py-[16px] px-[24px] rounded-[21px] border-[1px] border-[#333333] hover:border-[#27e2ef] transition-all group">
            <Image src={TroubleshootingIcon} alt="TroubleshootingIcon" />

            <h3 className="text-white text-[16px] mt-[30px] font-semibold group-hover:text-[#27e2ef] transition-all">
              Troubleshooting
            </h3>

            <p className="text-white font-thin text-[14px] mt-[30px] text-center">
              Encountering issues? Find solutions and helpful tips to resolve
              common problems and get back on track quickly.
            </p>

            <span className="text-white font-thin text-[14px] mt-[30px]">
              11 articles
            </span>
          </Link>

          <Link
            href={"/"}
            className="flex flex-col items-center justify-center py-[16px] px-[24px] rounded-[21px] border-[1px] border-[#333333] hover:border-[#27e2ef] transition-all group">
            <Image src={AccountIcon} alt="TroubleshootingIcon" />

            <h3 className="text-white text-[16px] mt-[30px] font-semibold group-hover:text-[#27e2ef] transition-all">
              Account & Payments
            </h3>

            <p className="text-white font-thin text-[14px] mt-[30px] text-center">
              Find all the information you need on how to register, manage your
              account and manage your subscription.
            </p>
            <span className="text-white font-thin text-[14px] mt-[30px]">
              11 articles
            </span>
          </Link>
        </div>
        <footer className="flex md:mt-[150px] mt-[40px] flex-col items-center justify-center">
          <Image src={logo} alt="Logo" className="w-[40px] h-[40px]" />
          <span className="text-[14px] text-gray-400 mt-[20px] text-center">
            Copyright © 2024 Slowdive LTD. All Rights Reserved.
          </span>
          <div className="flex gap-[20px]">
            <Link
              className="text-[14px] text-gray-400 mt-[20px]"
              href={"/Privacy"}>
              Terms of Use
            </Link>
            <Link
              className="text-[14px] text-gray-400 mt-[20px]"
              href={"/Terms"}>
              Privacy Policy
            </Link>
            <Link
              className="text-[14px] text-gray-400 mt-[20px]"
              href={"/Refund"}>
              Refund Policy
            </Link>
          </div>
          <div className="flex gap-[20px] my-[20px]">
            <Link href={"/https://www.instagram.com/"}>
              <Image src={insta} alt="instagram link" />
            </Link>
            <Link href={"/https://www.facebook.com/"}>
              <Image src={fb} alt="facebook link" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
