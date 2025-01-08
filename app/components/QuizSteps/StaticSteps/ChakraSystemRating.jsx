import React, { useState, useEffect } from "react";
import Image from "next/image";
import CircularProgress from "../../CircularProgress";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
// Chakra Icons
import RootIcon from "../../../../public/chakra-7.png";
import SacralIcon from "../../../../public/chakra-6.png";
import SolarIcon from "../../../../public/chakra-5.png";
import HeartIcon from "../../../../public/chakra-4.png";
import ThroatIcon from "../../../../public/chakra-3.png";
import ThirdEyeIcon from "../../../../public/chakra-2.png";
import CrownIcon from "../../../../public/chakra-1.png";

// Slide chakra bg
import RootSlideBg from "../../../../public/slide-7-bg.png";
import SacralSlideBg from "../../../../public/slide-6-bg.png";
import SolarSlideBg from "../../../../public/slide-5-bg.png";
import HeartSlideBg from "../../../../public/slide-4-bg.png";
import ThroatSlideBg from "../../../../public/slide-3-bg.png";
import ThirdEyeSlideBg from "../../../../public/slide-2-bg.png";
import CrownSlideBg from "../../../../public/slide-1-bg.png";

//Section 2 image
import benefit1img from "../../../../public/benefit-1.jpg";
import benefit2img from "../../../../public/benefit-2.jpg";
import benefit3img from "../../../../public/benefit-3.jpg";

//Section 3 image
import phonesImg from "../../../../public/img-s3.png";

SwiperCore.use([Autoplay, Navigation]);

const chakraData = [
  {
    id: 1,
    name: "Root",
    icon: RootIcon,
    bg: RootSlideBg,
    description:
      "An overactive or blocked root chakra can result in feelings of insecurity, fear, anxiety, a lack of energy flow  and a lack of trust in oneself and the world.",
    chakraScoreHardCoded: "31",
  },
  {
    id: 2,
    name: "Sacral",
    icon: SacralIcon,
    bg: SacralSlideBg,
    description:
      "A person who has an imbalanced sacral chakra could have behaviours that are ruled by depression, detachment, indulgent, aggressive, fear, anxiety and poor boundaries.",
    chakraScoreHardCoded: "28",
  },
  {
    id: 3,
    name: "Solar Plexus",
    icon: SolarIcon,
    bg: SolarSlideBg,
    description:
      "A person who has an imbalanced sacral chakra could have behaviours that are ruled by depression, detachment, indulgent, aggressive, fear, anxiety and poor boundaries.",
    chakraScoreHardCoded: "18",
  },
  {
    id: 4,
    name: "Heart",
    icon: HeartIcon,
    bg: HeartSlideBg,
    description:
      "An overactive heart chakra can result in problematic issues, such as co-dependency, manipulative behaviors, feeling of unworthiness, and an inability to trust others.",
    chakraScoreHardCoded: "24",
  },
  {
    id: 5,
    name: "Throat",
    icon: ThroatIcon,
    bg: ThroatSlideBg,
    description:
      "Problems with the throat chakra can manifest as physical symptoms such as thyroid imbalance, sore throat, and hearing difficulties. Individuals may also experience challenges in creativity and communication.",
    chakraScoreHardCoded: "20",
  },
  {
    id: 6,
    name: "Third Eye",
    icon: ThirdEyeIcon,
    bg: ThirdEyeSlideBg,
    description:
      "If this chakra becomes blocked or overactive, it can lead to sleep disorders, headaches, nightmares, severe depression and spiritual arrogance.",
    chakraScoreHardCoded: "23",
  },
  {
    id: 7,
    name: "Crown",
    icon: CrownIcon,
    bg: CrownSlideBg,
    description:
      "When the crown chakra is blocked or overactive, individuals may physically experience recurring headaches, chronic depression and heightened sensitivity to light and sound.",
    chakraScoreHardCoded: "17",
  },
];

const chakraItems = [
  {
    image: "/Root-icon-s3.png",
    title: "Root Chakra",
    description:
      "When your root chakra opens and energy flows freely, you will feel safe, comfortable, and confident.",
  },
  {
    image: "/Sacral-s3.png",
    title: "Sacral Chakra",
    description:
      "When your sacral chakra is balanced, you feel a healthy flow of energy, vitality, passion, and creativity.",
  },
  {
    image: "/Solar-s3.png",
    title: "Solar Plexus Chakra",
    description:
      "When this energy center is open and balanced, you feel confident, powerful, and ready to face any challenge that comes your way.",
  },
  {
    image: "/heart-s3.png",
    title: "Heart Chakra",
    description:
      "An open heart allows you to see all the beauty around you and truly connect to yourself, your loved ones, and the natural world.",
  },
  {
    image: "/Throat-s3.png",
    title: "Throat Chakra",
    description:
      "When your throat chakra is open, you experience the ability to have clear communication and a resonant voice.",
  },
  {
    image: "/eye-s3.png",
    title: "Third Eye Chakra",
    description:
      "When this chakra is activated, it can lead to a heightened sense of intuition, clarity of thought, and increased awareness.",
  },
  {
    image: "/Crown-s3.png",
    title: "Crown Chakra",
    description:
      "With the opening of your Crown Chakra, you may experience states of profound peace, serenity, and bliss.",
  },
];

const ChakraSystemRating = ({ selectedOptions, onContinue }) => {
  const [activeChakra, setActiveChakra] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handlePaginationClick = index => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
      setActiveChakra(index);
    }
  };

  return (
    <div className="w-full max-w-[550px]">
      <section
        className={`relative min-h-[600px] pb-[32px] flex flex-col items-center text-white ${
          isLoaded ? "" : "pointer-events-none opacity-50"
        }`}
        style={{
          backgroundImage: `url('/space.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}>
        <div className="pt-[60px] md:pt-[80px] flex items-center justify-between w-full px-[15px]">
          <div className="border-l-4 border-cyan-400 pl-3">
            <h2
              className="text-2xl font-semibold"
              style={{
                backgroundImage:
                  "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Your Chakra <br /> System Rating
            </h2>
          </div>
          <div className="w-[80px] h-[80px]">
            <CircularProgress value={30} />
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-[15px] mb-[10px] px-[15px]">
          <Image src="/man.png" alt="Chakra System" width={255} height={300} />
          {[...chakraData].reverse().map((chakra, index) => (
            <div
              key={chakra.id}
              className={`absolute cursor-pointer z-40 ${
                activeChakra === index ? "opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
              style={{
                top: `${12 + index * 34}px`,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              onClick={() => handlePaginationClick(index)}>
              <Image
                src={chakra.icon}
                alt={chakra.name}
                width={35}
                height={35}
                className={`${
                  activeChakra === index ? "scale-110" : "opacity-0 scale-100"
                } transition-transform duration-300`}
              />
            </div>
          ))}
        </div>
        <div className="w-full max-w-[550px] px-[15px] pb-[15px]">
          <Swiper
            onSwiper={setSwiperInstance}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={5000}
            spaceBetween={15}
            centeredSlides
            slidesPerView={"auto"}
            onSlideChange={({ activeIndex }) => setActiveChakra(activeIndex)}
            className="chakra-swiper mx-[-20px]">
            {[...chakraData].reverse().map(chakra => (
              <SwiperSlide
                key={chakra.id}
                className="p-[15px] md:p-[20px] h-[250px] min-h-[250px]  w-full max-w-[382px] bg-white bg-opacity-20 rounded-[30px] shadow-md flex flex-col justify-between text-left relative overflow-hidden"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  background:
                    "linear-gradient(214deg, #239abfcc 6.39%, #14141480 66.58%, #ffffff4d 129.09%, #fffc 176.57%)",
                }}>
                <Image
                  src={chakra.bg}
                  alt={chakra.name}
                  className="absolute top-0 left-0 pointer-events-none"
                  style={{
                    maxHeight: "190px",
                    maxWidth: "190px",
                    transform: "translate(-5%, -5%)",
                    zIndex: 9,
                  }}
                  width={190}
                  height={190}
                />
                <div className="flex justify-between items-start z-10">
                  <h3 className="text-xl font-bold text-white">
                    {chakra.name}
                  </h3>
                  <span className="text-2xl font-bold text-cyan-300">
                    {`${chakra.chakraScoreHardCoded}%`}
                  </span>
                </div>
                <div className="relative mt-2 z-10">
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-2 bg-red-500 rounded-full"
                      style={{
                        width: `${chakra.chakraScoreHardCoded}%`,
                      }}></div>
                  </div>
                </div>
                <span className="block text-red-500 text-sm font-bold mt-1 z-10">
                  BLOCKED
                </span>
                <p className="text-white text-[14px] font-normal mt-[10px] md:mt-4 z-10">
                  {chakra.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className=" bg-gradient-to-b from-[#000d22] to-[#000] pt-10 pb-[40px] px-4">
        <h2 className="text-center text-white text-2xl font-bold mb-8 border-l-4 border-cyan-400 pl-[5px]">
          How Can You Balance Your Chakras?
        </h2>
        <div className="flex flex-col gap-8">
          <div
            data-aos="fade-up"
            className="bg-gradient-to-b from-[#c9e2ff] to-[#c9e2ff00] rounded-lg flex flex-col p-4 pb-6">
            <Image
              src={benefit1img}
              alt="benefit-image"
              className="w-full h-auto rounded-[10px] mb-[10px]"
            />
            <h3 className="text-white text-lg font-bold mb-2">
              Start to Meditate
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Chakra meditation can aid in correcting the flow of energy in the
              body and realigning your energetic power within the blocked
              chakras.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="bg-gradient-to-b from-[#c9e2ff] to-[#c9e2ff00] rounded-lg flex flex-col p-4 pb-6">
            <Image
              src={benefit2img}
              alt="benefit-image"
              className="w-full h-auto rounded-[10px] mb-[10px]"
            />
            <h3 className="text-white text-lg font-bold mb-2">Practice Yoga</h3>
            <p className="text-white text-sm leading-relaxed">
              Yoga postures help to channel energy into the chakras, enhancing
              balance and promoting a sense of calm and focus.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="bg-gradient-to-b from-[#c9e2ff] to-[#c9e2ff00] rounded-lg flex flex-col p-4 pb-6">
            <Image
              src={benefit3img}
              alt="benefit-image"
              className="w-full h-auto rounded-[10px] mb-[10px]"
            />
            <h3 className="text-white text-lg font-bold mb-2">
              Explore Sound Healing
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Using sound frequencies, such as chanting or sound baths, can
              restore harmony and unblock stagnant energy in the chakras.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover mt-[-30px] sm:mt-[-180px] bg-no-repeat min-h-screen flex items-center justify-center flex-col px-4"
        style={{
          backgroundImage: `url('/bg-stars-s3.webp')`,
        }}>
        <div className="sm:mt-[250px]">
          <h2 className="text-center text-white text-2xl font-bold mb-8 border-l-4 border-cyan-400 pl-4">
            ALL THE ESSENTIALS FOR YOUR PRACTICE IN ONE APP
          </h2>
          <div className="flex justify-center  mb-8">
            <Image
              src={phonesImg}
              alt="App Presentation"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
          <p className="text-center text-white text-[22px] leading-relaxed mb-8">
            Try your personalised <br />
            <b>Meditation Plan</b> for balancing <br />
            your <b>Chakras</b>
          </p>
          <button
            className="relative w-full max-w-[550px] inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[24px] font-semibold uppercase leading-[28px] py-4 px-5 rounded-[64px] shadow-none transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-700"
            onClick={onContinue}>
            Get My Plan
          </button>
        </div>

        <div className="mt-[130px] flex flex-col items-center px-4 py-10">
          <h2
            data-aos="fade-up"
            className="text-center text-white text-2xl font-bold mb-8 border-l-4 border-cyan-400 pl-4">
            What Happens When You Open the Chakras?
          </h2>
          <div className="flex flex-col gap-3 w-full ">
            {chakraItems.map((item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="flex items-center gap-4 mb-5 p-[15px] bg-gradient-to-b from-[#0000005e] via-[#0000003b] to-[#0000005e] rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[50px] h-[50px] object-contain"
                />

                <div>
                  <h3 className="text-white text-[22px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-white text-[14px]">
                    {item.description.split(" ").map((word, i, arr) => {
                      const highlightedWords = arr.slice(-3).join(" ");
                      if (
                        item.description.includes(highlightedWords) &&
                        arr[i]
                      ) {
                        return (
                          <span key={i}>
                            <span
                              className={
                                word === highlightedWords.split(" ")[0] ||
                                word === highlightedWords.split(" ")[1] ||
                                word === highlightedWords.split(" ")[2]
                                  ? "text-[#02bfb9]"
                                  : ""
                              }>
                              {word}{" "}
                            </span>
                          </span>
                        );
                      }
                      return word + " ";
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[8px]">
            By continuing to use this web-site, you agree to the use of your
            cookies. Please, review our Privacy Policy and Terms & Conditions
            for mor details.
          </p>
        </div>
      </section>

      <div className="bg-[#4646464d] sticky bottom-0 left-0 right-0 z-30 text-right p-4 rounded-t-[30px]">
        <button
          className="relative w-full inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[22px] font-semibold uppercase leading-[18px] py-[16px] px-5 rounded-[64px] shadow-none transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-700"
          onClick={onContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default ChakraSystemRating;
