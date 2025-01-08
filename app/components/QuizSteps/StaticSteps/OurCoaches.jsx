import React from "react";
import Image from "next/image";
import coachesImg from "../../../../public/coaches__people.webp";

export default function OurCoaches({ onContinue }) {
  return (
    <div className="flex w-full max-w-[550px] flex-col h-full overflow-hidden min-h-screen items-center justify-between mt-[80px] bg-transparent  bg-gray-900 text-white">
      <h2
        className="text-[22px] font-bold leading-[24px] text-center mb-10 px-[25px]"
        style={{
          backgroundImage:
            "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
        It took us 6 years, 100+ coaches and therapists to create our ultimate
        program for chakra balancing
      </h2>

      {/* Moving Image Section */}
      <div className="w-full h-[300px] overflow-hidden">
        <div
          style={{
            display: "flex",
            animation: "moveSlider 40s linear infinite",
            animationTimingFunction: "linear",
            width: "200%", // Ширина контейнера для двох копій зображення
          }}>
          <Image
            src={coachesImg}
            alt="Coaches image"
            className=""
            style={{
              objectFit: "cover",
              width: "100%", // Зображення займає половину контейнера
            }}
          />
          <Image
            src={coachesImg} // Дублюємо зображення
            alt="Coaches image"
            style={{
              objectFit: "cover",
              width: "100%", // Зображення займає другу половину
            }}
          />
        </div>
        <style jsx>{`
          @keyframes moveSlider {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%); /* Рух на половину контейнера */
            }
          }
        `}</style>
      </div>

      <div className="w-full max-w-[550px] px-[10px] mb-[120px]">
        <button
          className="relative w-full max-w-[550px] h-[44px] inline-flex mx-auto items-center justify-center bg-[#2fd1db] text-white text-[17px] font-semibold uppercase leading-[28px] py-4 px-5 rounded-[64px] shadow-none transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-700"
          onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
