import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import styles for navigation
import { Navigation } from "swiper/modules"; //
import BackArrow from "../../../public/back-arrow.svg";
import NextArrow from "../../../public/next-arrow.svg";

import sliderImg1 from "../../../public/works-slider-img-1.jpeg";
import sliderImg2 from "../../../public/works-slider-img-2.png";
import sliderImg3 from "../../../public/works-slider-img-3.png";
import sliderImg4 from "../../../public/works-slider-img-4.png";
import sliderImg5 from "../../../public/works-slider-img-5.png";
import sliderImg6 from "../../../public/works-slider-img-6.png";
import sliderImg7 from "../../../public/works-slider-img-7.png";
import sliderImg8 from "../../../public/works-slider-img-8.png";
import sliderImg9 from "../../../public/works-slider-img-9.png";

const sliderData = [
  {
    image: sliderImg1,
    title: "Main Page",
    subtitle:
      "Slowdive app personalizes the meditation experience, tracks daily goals, and offers easy-to-start sessions for beginners. With a range of options like ‘Powerful Mantras’ and ‘Healing Frequencies,’ it’s both inviting and user-friendly, perfect for cultivating a daily meditation habit.",
  },
  {
    image: sliderImg2,
    title: "Lucid Dreaming",
    subtitle:
      "This Lucid Dreaming Mastery course is designed to guide you through the fascinating world of conscious dream control. Discover techniques to maintain awareness while you dream and harness the potential to explore limitless possibilities within your own mind.",
  },
  {
    image: sliderImg3,
    title: "Guided Meditation",
    subtitle:
      "With a session length displayed, users can easily engage with practices intended to enhance well-being and connect deeply with the surrounding world. The design is intuitive, fostering a serene pre-meditation atmosphere.",
  },
  {
    image: sliderImg4,
    title: "Holotropic Breathwork",
    subtitle:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    image: sliderImg5,
    title: "Mantras",
    subtitle:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    image: sliderImg6,
    title: "Notifications",
    subtitle:
      "Slowdive’s notification tool to manage reminders for wellness activities throughout the week. It displays a schedule with set times. The clean design and motivational tagline suggest a focus on habit formation and personal growth.",
  },
  {
    image: sliderImg7,
    title: "Balancing Chakras",
    subtitle:
      "The ‘Balancing Chakras’ section serves as a specialized resource for users seeking to align their chakra system through sound healing therapy. The interface displays the popularity of this holistic approach with a tally of favorites and listenings. ",
  },
  {
    image: sliderImg8,
    title: "Powerful Mantras",
    subtitle:
      "The ‘Powerful Mantras’ section of the app is a testament to its engaging content, as evidenced by the numerous favorites and listens it has garnered. It provides a curated list of mantra sessions of varying lengths, designed to enrich and deepen users’ spiritual practices.",
  },
  {
    image: sliderImg9,
    title: "Healing Frequencies",
    subtitle:
      "This section of the app highlights specific sound tones designed to promote body and mind health, as shown by a high number of favorites and listens. It offers a variety of sessions, each with detailed descriptions and timings to help users select their preferred healing session.",
  },
];

export default function Slider() {
  return (
    <div className="relative h-full  w-full xl:w-[60%] shadow-[6px_6px_18px_-12px_#FFFFFF] p-[20px]">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next", // Кастомний клас для кнопки "Наступна"
          prevEl: ".custom-prev", // Кастомний клас для кнопки "Попередня"
        }}
        effect="fade"
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="custom-swiper" // Клас для кастомізації
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full flex flex-col md:flex-row h-full items-center justify-center gap-[10px] lg:gap-[40px] lg:px-[40px]">
              {/* Image Section */}
              <Image
                src={slide.image}
                alt={slide.title}
                height={460}
                className="rounded-[24px]"
              />

              {/* Text Section */}
              <div className="text-white text-center lg:text-left mt-[15px] lg:py-[40px]">
                <h2 className="text-[#B7CE63] text-[35px] font-bold  lg:mb-4">
                  {slide.title}
                </h2>
                <p className="text-[15px] hidden md:block">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Кастомні кнопки */}
      <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2  p-2 rounded-full text-black transition-opacity duration-300 z-10">
        <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
      </button>
      <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2  p-2 rounded-full text-black transition-opacity duration-300 z-10">
        <Image src={NextArrow} alt="next-arrow" width={30} height={30} />
      </button>
    </div>
  );
}
