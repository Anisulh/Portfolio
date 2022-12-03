import { m } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
const projects = [
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
    builtWith: "Python, Django, JavaScript, React, sqLite3, Redis",
    github: "https://github.com/Anisulh/ArcLight-Music",
    demo: "https://arclight-music-production.up.railway.app/",
    image: "",
  },
  {
    name: "MULTI Productivity Application",
    description:
      "Full-stack productivity-based web application with CRUD functionality allowing users to organize tasks in a more straightforward digestible manner.",
    features: [
      "Developed a REST API backend using Express.js to handle requests from the client.",
      "Authentication is handled with  JWT tokens for the user and route authentication. Users can only access specific routes when logged in.",
      "Utilized MaterialUI components for an eye-pleasing client-side experience.",
    ],
    builtWith: "JavaScript, Express.js, React, MongoDB, Redux",
    github: "https://github.com/Anisulh/MULTI-Productivity-Web-App",
    demo: "https://multi-productivity.herokuapp.com/",
    image: "",
  },
  {
    name: "ZESTY Real-Estate Marketplace",
    description:
      "A web application that allows users to look at listing for their new potential homes and allows property owners to create, update and delete their property listings",
    features: [
      "Users can view all available listings and are authenticated using Firebase Authenticator.",
      "Utilized Google Maps API and Geolocation API to display listing location and nearby places.",
      "Styled with MaterialUI",
    ],
    builtWith: "JavaScript, React,  Firebase",
    github: "https://github.com/Anisulh/Zesty-Real-Estate-Marketplace",
    demo: null,
    image: "",
  },
  
];
function Work({ workRef }) {
  return (
    <div className="mt-60 mx-auto max-w-7xl text-gray-100">
      <div ref={workRef} className="text-3xl mx-10 mb-10 font-medium ">
        Featured Works
      </div>
      {projects.map((project, index) => {
        return (
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-14 border border-gray-600 rounded-md mx-10 py-5  px-10 "
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-medium mb-5">{project.name}</h3>
              <p className="pb-2 text-gray-300 ">{project.description}</p>
              <div className="max-w-xs inline-flex pb-2">
                <div className="mr-10">
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
                </div>
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
              <ul>
                {project?.features.map((feature, index) => {
                  return (
                    <li key={index} className=" text-gray-300 pl-6 pb-2">
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <div>
                <h4 className="font-medium text-lg">Built With:</h4>
                <p className="pl-6 pb-2 text-gray-300 ">{project.builtWith}</p>
              </div>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}

export default Work;
