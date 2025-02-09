import React from "react";

export default function ExperienceTimeline({
  val,
  idx,
  selectedCard,
  setSelectedCard,
  sliderRef,
  workCardRef,
}: any) {
  return (
    <li
      className={`mb-10 ms-4 p-2 transition-colors ${
        selectedCard === idx && " bg-gray-700 rounded-md"
      }`}
    >
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-sky-500"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {val.date}
      </time>
      <div className="flex gap-2 items-center">
        <h3 className="md:text-lg font-semibold text-white">{val.name}</h3>
        {idx === 0 && (
          <span className="bg-sky-100 text-sky-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm  ms-3">
            Present
          </span>
        )}
      </div>
      <p className="mb-4 text-sm md:text-base font-normal text-gray-200">
        {val.title}
      </p>
      <button
        className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800 border border-gray-600 rounded-lg "
        onClick={() => {
          setSelectedCard(idx);
        }}
      >
        Learn more
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
      <button
        className="md:hidden inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800 border border-gray-600 rounded-lg "
        onClick={() => {
          setSelectedCard(idx);
          sliderRef.current?.slickGoTo(idx);
          workCardRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Learn more
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </li>
  );
}
