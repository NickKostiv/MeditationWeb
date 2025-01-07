import React, { useState, useEffect } from "react";
import logo from "../../../../public/logo.webp";
import logoText from "../../../../public/logo-text.svg";
import Image from "next/image";
const AnalyzingPage = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const delay = setTimeout(() => {
        onFinish();
      }, 3000);

      return () => clearTimeout(delay);
    }
  }, [progress, onFinish]);

  return (
    <div className="flex w-full max-w-[550px] flex-col items-center justify-end gap-[24px] pb-[25px] min-h-screen bg-transparent text-white">
      <div className="mx-auto">
        <Image
          src={logo}
          alt="Logo"
          width={58}
          height={58}
          className="mx-auto"
        />
        <Image
          src={logoText}
          alt="Logo"
          width={216}
          height={46}
          className="mx-auto mt-[10px]"
        />

        <div className="">
          <div className="text-[28px]  mt-[30px] text-center">
            <span
              className="font-semibold"
              style={{
                backgroundImage:
                  "linear-gradient(98deg, #fff 34.56%, #27e2ef 79.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Great! Let’s see <br /> your results{" "}
            </span>
            🙌
          </div>

          <p className="text-[17px] font-normal text-center mt-[10px] text-gray-300 mb-4">
            Your answers can help us can get a <br />
            good sense{" "}
            <strong className="!font-bold text-white">
              {" "}
              of which chakra you <br />
              might be struggling with{" "}
            </strong>{" "}
            the most
          </p>
        </div>
      </div>
      <div className="w-full max-w-md mt-10 px-[20px]">
        <div className="relative w-full h-12 bg-transparent border border-white rounded-full overflow-hidden flex items-center">
          <div
            className="h-full bg-teal-400"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />

          <div
            className="h-full bg-gray-700"
            style={{
              width: `${100 - progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />

          <div className="absolute w-full text-white font-semibold text-center">
            Processing the answers
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingPage;
