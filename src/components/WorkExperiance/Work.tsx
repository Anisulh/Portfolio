import { m } from "framer-motion";
import { RefObject, useRef, useState } from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const work = [
  {
    name: "BlueFairy (spun off from #GoBeyond)",
    title: "Software Engineer / Team Lead",
    date: "Jun 2024 - Present",
    achievements: [
      "Transferred to the new company based on exceptional performance and contributions.",
      "Lead a team of 3 to build the MVP web and mobile app, resulting in a $1.1+ million seed round raise.",
      "Created a JSON-based dynamic form generator that creates multi-step, user-friendly forms with intuitive navigation, supporting complex nested fields.",
      "Implemented the ranking of users in the early access waitlist based on referral count.",
      "Migrated application infrastructure from heroku to GCP, reducing operational costs by 30% and improving deployment speed via CI/CD pipelines.",
      "Implemented security measures compliant with standards such as HIPAA, OWASP, and others.",
    ],
  },

  {
    name: "#GoBeyond",
    title: "Software Engineer",
    date: "Jul 2023 - Jun 2024",
    achievements: [
      "Developed a custom React UI component library, creating a consistent and gamified experience.",
      "Centralized error handling on the backend, making errors more consistent and reliable.",
      "Reduced recurrent page load times and api calls, up to 80%, by caching the data on the client.",
      "Created 100+ Jest tests and automated it with Github Actions to ensure code integrity on the backend.",
      "Transformed client-side styling from CSS to Tailwind CSS and used Figma, resulting in a more efficient and modern user interface and user experience (UI/UX).",
    ],
  },

  {
    name: "#GoBeyond",
    title: "Software Engineer Intern",
    date: "Jan 2023 - Jul 2023",
    achievements: [
      "Refactored Express backend logic into various middlewares, making it more scalable and maintainable.",
      "Aid in Typescript migration by adding types for all React API calls, ensuring data integrity.",
      "Added logging to all backend endpoints and functions to improve error and bottleneck detection.",
      "Developed automation funnels between spreadsheets, google calendar and gmail using Zapier.",
    ],
  },
  {
    name: "United Tech",
    title: "Fullstack Consultant (Part-time)",
    date: "Jul 2022 - Dec 2022",
    achievements: [
      "Collaborated with a team of 3 to develop a web application for a local business, enhancing their online presence and customer engagement.",
      "Facilitated cryptocurrency transactions in a project environment using Coinbase Cloud, integrating over 30+ cryptocurrencies.",
      "Implemented authentication mechanisms using Google OAuth and OpenID Connect, reinforcing user data protection.",
      "Authored technical documentation, streamlining knowledge transfer and maintenance processes.",
      "Automated testing and routine tasks using Selenium, redirecting focus towards feature development.",
    ],
  },
];

function Work({ workRef }: { workRef: RefObject<HTMLDivElement> | null }) {
  const [selectedCard, setSelectedCard] = useState(0);
  const workCardRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-gray-200" />
    ),
    dots: true,
    dotsClass: "slick-dots",
  };

  return (
    <div className="mt-60 relative">
      <div ref={workRef} className="text-2xl md:text-4xl mb-10 font-bold ">
        Work Experiance
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 pl-2 md:pl-10">
        <ol className="relative border-s border-gray-500">
          {work.map((val, idx) => (
            <li
              className={`mb-10 ms-4 p-2 transition-colors ${selectedCard === idx && " bg-gray-700 rounded-md"}`}
            >
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-sky-500"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {val.date}
              </time>
              <div className="flex gap-2 items-center">
                <h3 className="md:text-lg font-semibold text-white">
                  {val.name}
                </h3>
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
          ))}
        </ol>
        <div ref={workCardRef} className="pt-16 md:pt-0">
          <Slider
            {...settings}
            ref={sliderRef}
            onSwipe={(swipeDirection) => {
              if (swipeDirection === "left") {
                setSelectedCard(selectedCard + 1);
              } else if (swipeDirection === "right") {
                setSelectedCard(selectedCard - 1);
              }
            }}
          >
            {work.map((experience, index) => {
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mb-14 p-4 h-full"
                >
                  <WorkExperienceCard experience={experience} />
                </m.div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Work;
