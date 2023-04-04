import { m } from "framer-motion";
import { RefObject } from "react";

const projects = [
  {
    name: "GoBeyond Labs",
    title: "Software Engineer",
    date: "Mar 2023 - Present",
    achievements: [
      "Developed and implemented a video conferencing and real-time chat application using the MERN stack, resulting in a seamless communication platform for remote teams and users.",
      "Decreased initial application load times by nearly 40% by optimizing image formats and lazy loading pages users do not frequently access.",
      "Utilized Unreal Engine 5 to create digital Metahumans, and integrated them into video conferencing applications, enhancing user experience and engagement.",
      "Collaborated with teams from 2 divisions to conduct product market research and understand user requirements.",
    ],
  },
  {
    name: "Research Foundation of CUNY",
    title: "Software Engineer Intern",
    date: "Jan 2023 - Mar 2023",
    achievements: [
      "Spearheaded a 3D machine learning prototype using Blender, Three.js, TensorFlow.js, and React that creates a augmented reality filter in place of user's face and tracks facial movements.",
      "Implemented 50+ tests for the server to ensure all functionality is retained during any updates and changes.",
      "Enabled the transaction and holding of cryptocurrency using Coinbase Cloud, allowing for the exchange of 30+ cryptocurrencies between users.",
      "Automated Heroku deployments and testing using GitHub Actions upon push to the Main branch, reducing deployment times and increasing repository security.",
      "Designed mockups using Figma and transitioned the client-side styling from CSS to Tailwind CSS, removing excess files.",
    ],
  },
];

function Work({ workRef }: { workRef: RefObject<HTMLDivElement> | null }) {
  return (
    <div className="mt-60 mx-auto max-w-7xl text-gray-100">
      <div ref={workRef} className="text-3xl mx-10 mb-10 font-medium ">
        Work Experiance
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
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-medium">{project.name}</h3>
                  <p className="pb-8 text-gray-300 ">{project.title}</p>
                </div>
                <p>{project.date}</p>
              </div>

              <h4 className="font-medium text-lg">Achievements</h4>
              <ul className="list-disc pl-10 ">
                {project?.achievements.map((feature, index) => {
                  return (
                    <li key={index} className=" text-gray-300 pb-2">
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}

export default Work;
