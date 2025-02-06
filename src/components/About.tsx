import { m } from "framer-motion";
import { RefObject } from "react";

interface aboutProps {
  aboutRef: RefObject<HTMLDivElement> | null;
}

function About({ aboutRef }: aboutProps) {
  return (
    <m.div
      className="mb-10 mt-40 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div ref={aboutRef}>
        <h4 className="text-3xl  mb-10 font-bold ">About</h4>
        <div className="text-gray-300 ">
          <p className="text-lg mb-5">
            My name is Anisul Haque, I’m a mid-level software engineer
            specializing in full stack and web development. I graduated from
            Hunter College with a BA in Biology, and my journey into software
            engineering has been driven by a passion for building scalable,
            user-friendly applications
          </p>
          <p className="text-lg mb-5">
            In my current role at a BlueFairy, I’ve had the opportunity to lead
            a small team to develop our MVP for both web and mobile platforms.
            One of my key contributions was creating a dynamic JSON-based form
            generator that significantly improved user experience, and I also
            played a central role in migrating our infrastructure to Google
            Cloud Platform—resulting in a 30% reduction in operational costs
            while ensuring compliance with high security standards.
          </p>
          <p className="text-lg mb-5">
            Before that, at #GoBeyond, I focused on front-end and back-end
            optimizations, including developing a custom React UI component
            library and centralizing error handling on our backend. I also put a
            strong emphasis on testing, having written over 100 Jest tests and
            automated our CI/CD pipelines with GitHub Actions to maintain code
            integrity.
          </p>
          <p className="text-lg mb-5">
            Technically, I’m proficient in JavaScript (ES6+), TypeScript,
            Python, and Go, and I have hands-on experience with frameworks like
            React, Node.js, and Django, as well as working with PostgreSQL,
            MongoDB, and various DevOps tools. This blend of technical skills
            and real-world project experience allows me to effectively tackle
            both the design and implementation challenges of modern web
            applications.
          </p>
        </div>
      </div>
    </m.div>
  );
}

export default About;
