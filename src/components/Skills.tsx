import { m } from "framer-motion";
import { RefObject } from "react";
interface skillProps {
  skillsRef: RefObject<HTMLDivElement> | null;
}

function Skills({ skillsRef }: skillProps) {
  return (
    <m.div
      className="text-gray-100 mx-auto mb-10 max-w-7xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div ref={skillsRef} className="mx-10">
        <h4 className="text-3xl mb-5 font-medium  ">Skills</h4>
        <h5 className="font-medium text-lg">Programming Languages:</h5>
        <p className=" text-gray-300  pl-6 pb-2">
          HTML, CSS, JavaScript, Python, C
        </p>
        <h5 className="font-medium text-lg">Frameworks:</h5>
        <p className=" text-gray-300  pl-6 pb-2">
          MaterialUI, Tailwind CSS, Express.js, Django, Flask, React
        </p>
        <h5 className="font-medium text-lg">Testing:</h5>
        <p className=" text-gray-300  pl-6 pb-2">Jest, SuperTest</p>
        <h5 className="font-medium text-lg">Databases:</h5>
        <p className=" text-gray-300  pl-6 pb-2">
          sqLite3, MongoDB, Firebase, Redis
        </p>
        <h5 className="font-medium text-lg">Software:</h5>
        <p className=" text-gray-300  pl-6 pb-2">GitHub, Git, Postman, Redux</p>
        <h5 className="font-medium text-lg">Languages</h5>
        <p className=" text-gray-300  pl-6 pb-2">
          English (fluent), Bengali (native)
        </p>
      </div>
    </m.div>
  );
}

export default Skills;
