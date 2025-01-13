import React from "react";
import Image from "next/image";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog3.png";
import blog4 from "../../../public/blog4.png";
import blog5 from "../../../public/blog5.png";
import blog6 from "../../../public/blog6.png";
import blog7 from "../../../public/blog7.png";
import blog8 from "../../../public/blog8.png";
import blog9 from "../../../public/blog9.png";

const blogPosts = [
  {
    image: blog1,
    title: "Overcoming Heart Chakra Blockage for Emotional Harmony",
    category: "Mindfulness, Well-being, Yoga",
  },
  {
    image: blog2,
    title:
      "Healing sounds for sleep | Frequencies that foster serenity and restoration",
    category: "Mindfulness, Well-being",
  },
  {
    image: blog3,
    title: "How to lucid dream tonight for a transformative sleep experience",
    category: "Mindfulness, Well-being",
  },
  {
    image: blog4,
    title: "9 Solfeggio Frequencies And Their Benefits",
    category: "Mindfulness, Well-being",
  },
  {
    image: blog5,
    title: "How Om chanting benefits can make you happier and healthier",
    category: "Mindfulness, Well-being, Yoga",
  },
  {
    image: blog6,
    title: "How to heal sacral chakra: Boost creativity, sensuality, intimacy",
    category: "Breathing, Mindfulness, Well-being",
  },
  {
    image: blog7,
    title: "Cultivating Creativity through Meditation: Techniques and Tips",
    category: "Breathing, Mindfulness, Well-being",
  },
  {
    image: blog8,
    title: "Overcoming anxiety with meditation: a step-by-step approach",
    category: "Mindfulness, Well-being",
  },
  {
    image: blog9,
    title: "From stress to serenity: Meditation techniques for busy people",
    category: "Breathing, Mindfulness, Well-being ",
  },
];
export default function Posts() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-[20px]">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-[340px] h-[444px] bg-[#1E1E1E] rounded-[21px] overflow-hidden">
          {/* Image */}
          <div className="w-full h-[50%]">
            <Image
              src={post.image}
              alt={post.title}
              layout="responsive"
              width={340}
              height={222}
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col items-center justify-between px-[20px] py-[15px] h-[50%]">
            <h3 className="mt-[15px] text-[18px] tracking-[1px] uppercase text-[#27E2EF] text-center">
              {post.title}
            </h3>
            <p className="mt-[15px] text-white text-[15px] text-center">
              {post.category}
            </p>
            <a
              href="#"
              className="my-[15px] text-[#02bfb9] text-[13px] uppercase">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
