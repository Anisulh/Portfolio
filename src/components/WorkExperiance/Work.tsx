import { m } from "framer-motion";
import { RefObject, useRef } from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const work = [
  {
    name: "GoBeyond",
    title: "Software Engineer",
    date: "Jan 2023 - Present",
    achievements: [
      "Enhanced frontend performance of React.js applications by 40+% through image optimization and implementation of lazy loading techniques.",
      "Transformed client-side styling from CSS to Tailwind CSS and used Figma, resulting in a more efficient and modern user interface and user experience (UI/UX).",
      "Led the design and execution of data pipelines to train machine learning Tensorflow models, optimizing data preprocessing.",
      "Managed a team of interns in Selenium-based data collection, emphasizing data quality and integrity using Python.",
      "Orchestrated the migration of legacy infrastructure from Heroku to AWS with Terraform, improving scalability and system reliability.",
      "Developed and maintained over 50 functional tests for Express.js server using Jest, ensuring robust backend performance.",
    ],
  },
  {
    name: "United Tech",
    title: "Fullstack Consultant",
    date: "Jan 2023 - Mar 2023",
    achievements: [
      "Spearheaded the development of a full stack Angular.js and Spring Boot based video conferencing and chat platform, enhancing remote communication.",
      "Facilitated cryptocurrency transactions in a project environment using Coinbase Cloud, integrating over 30+ cryptocurrencies.",
      "Implemented high-security authentication mechanisms using Google OAuth and OpenID Connect, reinforcing user data protection.",
      "Directed a team in the creation of scalable microservices, contributing to a robust and modular application architecture.",
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
  const onSlideNext = () => {
    sliderRef.current?.slickNext();
  };
  const onSlidePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="mt-60 relative px-8">
      <div ref={workRef} className="text-4xl mb-10 font-bold ">
        Work Experiance
      </div>

      <div>
        <Slider {...settings} ref={sliderRef}>
          {work.map((experience, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-14 border-2 border-gray-200 rounded-xl p-5 min-h-fit"
            >
              <WorkExperienceCard experience={experience} />
            </m.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const NextArrow = ({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <ChevronRightIcon className="h-5" />
    </button>
  );
};

const PrevArrow = ({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <ChevronLeftIcon className="h-5" />
    </button>
  );
};

export default Work;
