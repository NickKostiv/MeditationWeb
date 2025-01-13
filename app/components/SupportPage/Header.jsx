import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.webp";

export default function Header() {
  return (
    <header className="flex flex-col h-full min-h-[405px] mx-auto w-full  max-w-[960px] pb-[100px] ">
      {/* Верхній рядок з логотипом та перемикачем мови */}
      <div className="flex items-center justify-between w-full mx-auto">
        {/* Логотип */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="Logo" className="w-[40px] h-[40px]" />
        </div>

        {/* Перемикач мови */}
        <div className="flex items-center space-x-1 text-white">
          <svg
            id="locale-picker-globe"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-hidden="true">
            <path
              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 15C9.39949 15 10.534 11.866 10.534 8C10.534 4.13401 9.39949 1 8 1C6.60051 1 5.466 4.13401 5.466 8C5.466 11.866 6.60051 15 8 15Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.448 5.75989H14.524"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.448 10.2402H14.524"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Select Dropdown */}
          <div className="relative">
            <select
              className="appearance-none bg-transparent text-white text-sm pl-[3px] pr-6 cursor-pointer focus:outline-none"
              defaultValue="en">
              <option value="en">English</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Заголовок */}
      <h1 className="text-white text-start text-[28px] font-bold mt-[50px]">
        Hi, need some help?
      </h1>

      {/* Інпут */}
      <div className="mt-[30px] w-full max-w-[900px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full bg-gray-500 bg-opacity-50 text-white text-lg pl-[40px] py-[15px] rounded-[10px] border border-transparent focus:outline-none focus:border-[#27E2EF] focus:bg-white focus:text-black placeholder:text-gray-300 peer"
          />
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[10px] top-1/2 transform -translate-y-1/2 text-white peer-focus:text-black transition-colors duration-300"
            aria-hidden="true">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
