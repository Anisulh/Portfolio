import { m } from "framer-motion";
import { RefObject } from "react";

interface aboutProps {
  aboutRef: RefObject<HTMLDivElement> | null;
}

function About({ aboutRef }: aboutProps) {
  return (
    <m.div
      className="mx-auto max-w-7xl mb-10 mt-40 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div ref={aboutRef} className="mx-10">
        <h4 className="text-3xl text-gray-100  mb-10 font-medium ">About</h4>
        <div className="text-gray-300 ">
          <p className="text-lg mb-5">
            My name is Anisul Haque, and I'm a software engineer with a
            background in biology. I completed an internship during my studies,
            where I developed my skills in programming languages like
            JavaScript, TypeScript, and Python. Since then, I've been working
            full-time as a software engineer and honing my skills in a variety
            of areas.
          </p>
          <p className="text-lg mb-5">
            Although my degree is in biology, my interest in programming and
            problem-solving led me to pursue a career in software engineering.
            I'm always looking for ways to apply my background in biology to my
            work as a software engineer, whether it's using data-driven methods
            to solve complex problems or developing software for scientific
            research.
          </p>
          <p className="text-lg mb-5">
            I have experience working with several frameworks, including React,
            Express, and Django, and I've worked on a variety of projects,
            including a web application that allowed users to chat in real-time
            in groups while sharing music synchronously and a web app that
            utilized machine learning to monitor users facial movements and map
            to a model. I've also gained experience working with databases such
            as SQL and MongoDB.
          </p>
          <p className="text-lg mb-5">
            As a software engineer, I'm passionate about staying up-to-date with
            the latest technologies and collaborating with others to solve
            complex problems.  I enjoy working on all aspects of a project, from the design to
            deployment I make sure everything is how it should be. I'm always
            looking for new ways to incorporate new technologies into my
            projects and hone my existing skills. Right now, I'm learning to
            work with typescript and get better at TDD. If you're interested in learning more about my
            experience and skills or connecting with me, please don't hesitate
            to send me a message. I'm excited to explore new opportunities and
            grow as a software engineer.
          </p>
        </div>
      </div>
    </m.div>
  );
}

export default About;
