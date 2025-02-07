import { m } from "framer-motion";
import { RefObject } from "react";
interface skillProps {
  skillsRef: RefObject<HTMLDivElement> | null;
}

function Skills({ skillsRef }: skillProps) {
  return (
    <m.div
      className="mt-40  mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div ref={skillsRef} className="">
        <h4 className="text-2xl md:text-4xl mb-5 font-bold">Skills</h4>
        <h5 className="font-medium md:text-lg">Programming Languages:</h5>
        <p className=" text-gray-300 pl-6 md:text-base text-sm pb-2">
          JavaScript, TypeScript, Python, Go, C, HTML, CSS
        </p>
        <h5 className="font-medium md:text-lg">Frameworks:</h5>
        <p className=" text-gray-300 pl-6 md:text-base text-sm pb-2">
          React, Express.js, Django, Flask, Tailwind CSS, Node.js, React Native,
          HTMX
        </p>
        <h5 className="font-medium md:text-lg">Testing:</h5>
        <p className=" text-gray-300 pl-6 md:text-base text-sm pb-2">
          Jest, SuperTest, React Testing Library
        </p>
        <h5 className="font-medium md:text-lg">Databases:</h5>
        <p className=" text-gray-300 pl-6 md:text-base text-sm pb-2">
          MySQL, Postgres, MongoDB, Redis
        </p>
        <h5 className="font-medium md:text-lg">Software / Tools:</h5>
        <p className=" text-gray-300 pl-6 md:text-base text-sm pb-2">
          GCP, Docker, Jest, GitHub, Git, Postman, Redux, Figma, Node.js, Linux,
          Expo / EAS
        </p>
        <h5 className="font-medium md:text-lg">Languages</h5>
        <p className=" text-gray-300 pl-6 md:text-base text-sm pb-2">
          English (fluent), Bengali (native)
        </p>
      </div>
    </m.div>
  );
}

export default Skills;
