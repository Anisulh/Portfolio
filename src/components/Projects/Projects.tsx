import { m } from "framer-motion";
import { RefObject, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Iproject } from "../../types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClothingsSectionsPixel8Mock from "../../images/ClothingSectionsPixel8Mock.webp";

const projects: Iproject[] = [
  {
    name: "Rizmic Fits",
    description:
      "An outfit manager allowing users to track their wardrobe and generate outfits based on user preferences and style recommendations.",
    features: [
      "Engineered cross-platform mobile applications using React Native for both Android and iOS devices, enhancing user accessibility and expanding reach",
      "Increased security and reliability of the application by adding request limiters preventing DDOS attacks.",
      "Created a web scrapper that collects images and information from a provided link to decrease the time needed for users to add clothes.",
      "Enabled secure authentication pages using Google OAuth and OpenID Connect, enabling multi-factor authentication and protecting user data.",
    ],
    builtWith:
      "TypeScript, Express.js, Node.js, React, MongoDB, Redis, React Native",
    github: "https://github.com/Anisulh/RizmicClient",
    demo: "https://rizmicfits.com/",
    image: (
      <img
        width={2432}
        height={1442}
        className="w-[48rem] max-w-xs rounded-xl  sm:w-[57rem] md:-ml-4 lg:-ml-0 py-4 px-2"
        src={ClothingsSectionsPixel8Mock}
      />
    ),
  },
  {
    name: "ArcLight Music Sharing",
    description:
      "A full-stack music-sharing application that allows users to join a room using a unique code and listen synchronously.",
    features: [
      "Utilized Spotify API to allow users to choose and play the music that they want to share.",
      "Created a REST API using Django to handle client and Spotify API requests",
      "Designed a UI with Tailwind CSS to provide a simple and direct user experience.",
      "Implemented chat functionality in rooms using Django Channels and Websockets",
    ],
    builtWith: "Python, Django, JavaScript, React, MySQL, Redis",
    github: "https://github.com/Anisulh/ArcLight-Music",
    demo: "https://arclight-music-production.up.railway.app/",
    image: "",
  },
  {
    name: "Newsly",
    description:
      "A personalized news recommendation engine that allows users to read news articles based on their preferences.",
    features: [
      "Designed and developed a news recommendation engine that caters news articles based on user activity (ex. reading, favoriting, saving, etc.)",
      "Fine-tuned BERT NLP model resulting in 92% content categorization accuracy",
      "Secured application with JWT and httpOnly cookies, achieving OWASP Top 10 compliance",
    ],
    builtWith: "HTMX, Templ, Go, Fiber, Kafka, and Postgres",
    github: "https://github.com/Anisulh/ArcLight-Music",
    image: "",
  },
];
function Projects({
  projectsRef,
}: {
  projectsRef: RefObject<HTMLDivElement> | null;
}) {
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
    <div className="mt-40">
      <div ref={projectsRef} className="text-4xl mb-10 font-bold ">
        Featured Projects
      </div>
      <div className="px-4">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project, index) => {
            return (
              <m.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-14 border-2 border-gray-200 rounded-xl p-4 h-full"
              >
                <ProjectCard project={project} />
              </m.div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
