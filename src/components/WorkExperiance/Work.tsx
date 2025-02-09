import { m } from "framer-motion";
import { RefObject, useRef, useState } from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExperienceTimeline from "./ExperienceTimeline";

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
        Work Experience
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 pl-2 md:pl-10 md:pr-40 w-full h-full">
        <ol className="relative border-s border-gray-500 md:w-1/2">
          {work.map((val, idx) => (
            <ExperienceTimeline
              key={idx}
              val={val}
              idx={idx}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              sliderRef={sliderRef}
              workCardRef={workCardRef}
            />
          ))}
        </ol>
        <div ref={workCardRef} className="pt-16 md:pt-0 md:w-[85%] h-full">
          <Slider
            {...settings}
            ref={sliderRef}
            onSwipe={(swipeDirection) => {
              if (swipeDirection === "left") {
                setSelectedCard((selectedCard + 1) % work.length);
              } else if (swipeDirection === "right") {
                setSelectedCard((selectedCard - 1 + work.length) % work.length);
              }
            }}
          >
            {work.map((experience, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-14 p-4 h-full"
              >
                <WorkExperienceCard experience={experience} />
              </m.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Work;
