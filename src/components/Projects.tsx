import { m } from "framer-motion";
import { RefObject } from "react";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

interface workProps {
  projectsRef: RefObject<HTMLDivElement> | null;
}

const projects = [
  {
    name: "Rizmic Fits",
    description:
      "An outfit manager allowing users to track their wardrobe and generate outfits based on user preferences and style recommendations.",
    features: [
      "Engineered cross-platform mobile applications using Flutter for both Android and iOS devices, enhancing user accessibility and expanding reach",
      "Increased security and reliability of the application by adding request limiters preventing DDOS attacks.",
      "Created a web scrapper that collects images and information from a provided link to decrease the time needed for users to add clothes.",
      "Enabled secure authentication pages using Google OAuth and OpenID Connect, enabling multi-factor authentication and protecting user data.",
    ],
    builtWith: "TypeScript, Express.js, Node.js, React, MongoDB, Redis, Flutter",
    github: "https://github.com/Anisulh/RizmicClient",
    image: "",
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
  }
];
function Projects({ projectsRef }: workProps) {
  return (
    <div className="mt-40 mx-auto max-w-7xl text-gray-100">
      <div ref={projectsRef} className="text-3xl mx-10 mb-10 font-medium ">
        Featured Projects
      </div>
      {projects.map((project, index) => {
        return (
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-14 border border-gray-600 rounded-md mx-10 py-5  px-10 "
          >
            <div>
              <h3 className="text-xl font-medium mb-5">{project.name}</h3>
              <p className="pb-2 text-gray-300 ">{project.description}</p>
              <div className="max-w-xs inline-flex pb-2">
                {project.github && <div className="mr-10">
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex w-full items-center justify-center rounded-md border border-gray-600 bg-gray-800 px-3 py-1 text-base font-medium text-white hover:bg-sky-800 transition-colors"
                  >
                    <a
                      target="_blank"
                      href={project.github}
                      className="flex items-center"
                    >
                      <BsGithub className="mr-2" />
                      Github
                    </a>
                  </m.button>
                </div>}
                {project.demo && (
                  <div>
                    <m.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-100 px-3 py-1 text-base font-medium text-sky-700 hover:bg-sky-200  "
                    >
                      <a
                        target="_blank"
                        href={project.demo}
                        className="flex items-center"
                      >
                        <HiOutlineExternalLink className="mr-2" />
                        Demo
                      </a>
                    </m.button>
                  </div>
                )}
              </div>
              <h4 className="font-medium text-lg">Features</h4>
              <ul className="list-disc pl-10">
                {project?.features.map((feature, index) => {
                  return (
                    <li key={index} className=" text-gray-300  pb-2">
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <div>
                <h4 className="font-medium text-lg">Built With:</h4>
                <p className="pl-10 pb-2 text-gray-300 ">{project.builtWith}</p>
              </div>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}

export default Projects;
