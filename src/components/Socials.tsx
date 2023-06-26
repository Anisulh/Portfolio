import { BsGithub, BsLinkedin } from "react-icons/bs";
import { m } from "framer-motion";

function Socials() {
  return (
    <div className="fixed sm:left-10 bottom-10 right-10 flex w-fit  sm:block">
      <m.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="sm:mb-10 block mr-5 sm:mr-0"
      >
        <a
          target="_blank"
          href="https://github.com/Anisulh"
          className="hover:text-sky-500  text-gray-100"
        >
          <BsGithub size="30" />
        </a>
      </m.button>
      <m.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="sm:mb-10 block"
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anisulh/"
          className="hover:text-sky-500 text-gray-100"
        >
          <BsLinkedin size="30" />
        </a>
      </m.button>
    </div>
  );
}

export default Socials;
