import { m } from "framer-motion";
import { RefObject, useRef } from "react";
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
    date: "Jan 2023 - Present",
    achievements: [
      "Refactored Express backend logic into various middlewares, making it more scalable and maintainable",
      "Aid in Typescript migration by adding types for all React API calls, ensuring data integrity",
      "Added logging to all backend endpoints and functions to improve error and bottleneck detection",
      "Developed automation funnels between spreadsheets, google calendar and gmail using Zapier",
    ],
  },
  {
    name: "United Tech",
    title: "Fullstack Consultant (Part-time)",
    date: "Jul 2022 - Dec 2022",
    achievements: [
      "Collaborated with a team of 3 to develop a web application for a local business, enhancing their online presence and customer engagement.",
      "Facilitated cryptocurrency transactions in a project environment using Coinbase Cloud, integrating over 30+ cryptocurrencies.",
      "Implemented high-security authentication mechanisms using Google OAuth and OpenID Connect, reinforcing user data protection.",
      "Authored extensive technical documentation, streamlining knowledge transfer and maintenance processes.",
      "Automated testing and routine tasks using Selenium, redirecting focus towards feature development and enhancements",
    ],
  },
];

function Work({ workRef }: { workRef: RefObject<HTMLDivElement> | null }) {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="mt-60 relative">
      <div ref={workRef} className="text-4xl mb-10 font-bold ">
        Work Experiance
      </div>

      <div className="px-4 h-full border">
        <Slider {...settings} ref={sliderRef}>
          {work.map((experience, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className=" border-2 border-gray-200 rounded-xl p-5 min-h-full flex"
            >
              <WorkExperienceCard experience={experience} />
            </m.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Work;
