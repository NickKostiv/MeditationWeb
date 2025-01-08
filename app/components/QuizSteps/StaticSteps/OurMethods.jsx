import React from "react";
import Image from "next/image";
import coachesImg from "../../../../public/university-logo.png";

export default function OurCoaches({ onContinue }) {
  return (
    <div className="flex w-full max-w-[550px] flex-col h-full overflow-hidden min-h-screen items-center justify-between mt-[80px] bg-transparent  bg-gray-900 text-white">
      <h2
        className="text-[28px] mt-[30px] text-center font-bold leading-[100%] uppercase mb-10 px-[25px]"
        style={{
          backgroundImage:
            "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
        Get ready <br />
        for the real <br />
        life changes
      </h2>

      <Image
        src={coachesImg}
        alt="Coaches image"
        className="px-[20px]"
        style={{
          objectFit: "cover",
          width: "100%", // Зображення займає половину контейнера
        }}
      />

      <p className="mt-[20px] text-[18px] font-light text-center text-white">
        The methods we use are so <br /> effective, they are recommended <br />
        <strong> all around the world</strong>
      </p>
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
