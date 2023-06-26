import { m } from "framer-motion";
import { RefObject } from "react";

const projects = [
  {
    name: "GoBeyond",
    title: "Software Engineer",
    date: "Jan 2023 - Present",
    achievements: [
      "Decreased initial React application load times by 40+% by optimizing image formats and lazy loading pages users do not frequently access.",
      "Designed mockups using Figma and transitioned the client-side styling from CSS to Tailwind CSS, removing excess files.",
      "Led a team of interns on data collection, adeptly guiding them in the process of filtering and refining datasets using Python to ensure data quality and integrity.",
      "Spearheaded the seamless migration of the legacy infrastructure to Amazon Web Services (AWS), bolstering scalability, performance, and reliability.",
      "Implemented 50+ tests  for the Express.js server using Jest to ensure all functionality is retained during any updates and changes.",
      "Automated Heroku deployments and testing using GitHub Actions, reducing deployment time.",
    ],
  },
  {
    name: "United Tech",
    title: "Fullstack Consultant",
    date: "Jan 2023 - Mar 2023",
    achievements: [
      "Developed and implemented a video conferencing and real-time chat application using Angular, resulting in a seamless communication platform for remote teams and users.",
      "Enabled the transaction and holding of cryptocurrency on a project using Coinbase Cloud, allowing for the exchange of 30+ cryptocurrencies between users.",
      "Implemented robust security for authentication pages leveraging Google OAuth and OpenID Connect, facilitating multi-factor authentication and safeguarding user information.",
      "Led interns to architect 5+ scalable microservices, facilitating a more robust and modular system architecture.",
      "Crafted 50+ pages of comprehensive and insightful technical documentation, fortifying the knowledge base and contributing to seamless knowledge transfer and maintenance.",
      "Automated clerical tasks using Python scripts, allowing for the development team to focus on feature requests",
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
