import { m } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Iproject } from "../../types";



function ProjectCard({ project }: { project: Iproject }) {
  return (
    <div>
      <h3 className="text-xl font-medium mb-5">{project.name}</h3>
      <p className="pb-2 text-gray-300 ">{project.description}</p>
      <div className="max-w-xs inline-flex pb-2">
        {project.github && (
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
        )}
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
  );
}

export default ProjectCard;
