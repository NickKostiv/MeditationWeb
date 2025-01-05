import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import chakraImgBottom from "../../../public/chakras__bottom.png";
import chakraImg from "../../../public/chakras__main.png";

const Step2 = ({ onContinue }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Тривалість анімації
      easing: "ease-in-out", // Плавність переходу
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-[540px]">
      {/* Зображення з анімацією fade-in */}
      <Image
        src={chakraImg}
        alt="Chakras"
        width={150}
        height={150}
        className="mb-6"
        data-aos="fade-in"
      />
      {/* Заголовок з анімацією slide-up */}
      <h1
        className="text-[24px] text-center font-semibold px-[30px]"
        style={{
          backgroundImage:
            "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        data-aos="slide-up">
        Chakras are the energy centers of your body
      </h1>
      {/* Текст з анімацією fade-up */}
      <p
        className="text-[17px] font-normal text-center mt-[10px] text-gray-300 mb-4"
        data-aos="fade-up">
        If these energy centers get blocked, <br />
        you may experience{" "}
        <strong className="!font-bold text-white">
          physical or <br /> emotional symptoms
        </strong>{" "}
        related to a <br /> particular chakra
      </p>
      <div data-aos="zoom-in">
        {/* Друге зображення */}
        <Image
          src={chakraImgBottom}
          alt="Chakras"
          width={345}
          height={345}
          className="mb-6"
        />
      </div>
      {/* Кнопка з анімацією fade-in */}
      <div className="w-full max-w-[500px] bg-[#4646464d] sticky bottom-0 left-0 right-0 z-30 text-right p-4 rounded-t-[30px]">
        <button
          className="relative w-full inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[24px] font-semibold uppercase leading-[28px] py-4 px-5 rounded-[64px] shadow-none transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-700"
          onClick={onContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Step2;
