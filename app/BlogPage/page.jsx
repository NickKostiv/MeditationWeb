"use client";
import React from "react";
import Link from "next/link";

import Header2 from "../components/Blog/Header2";
import Posts from "../components/HowItWorks/Posts";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="relative font-geometria bg-black py-4 md:pt-[58px] px-[20px] md:px-[40px] lg:px-[130px]">
      <Header2 />
      <div className="flex flex-col w-full">
        <div className="">
          <h1 className="text-[28px]  md:text-[61px] text-start font-bold uppercase text-transparent bg-clip-text bg-blog-title-gradient  leading-[1.6em] tracking-[0.02em] mt-[15px] md:mt-10 font-geometria">
            Slowdive Diaries
          </h1>

          <p className="my-[40px] text-white text-[20px] md:leading-[42px] font-light">
            In these pages, we unfold the quiet magic of taking things slow.
            With each entry, we dive deeper into the subtle art of mindfulness,
            sharing stories, insights, and gentle guidance to help you navigate
            the depths of your inner landscape. This is a place where time
            pauses, allowing you to savor each moment, breathe more deeply, and
            truly connect with the essence of being.
          </p>
        </div>
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
