import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Projects from "./components/Projects/Projects";
import { LazyMotion, domAnimation } from "framer-motion";
import Work from "./components/WorkExperiance/Work";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden mb-20 mx-auto max-w-7xl text-gray-100 px-4 sm:px-6 lg:px-8">
        <Navigation
          workRef={workRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
          homeRef={homeRef}
        />
        <Socials />
        <Hero workRef={workRef} contactRef={contactRef} homeRef={homeRef} />
        <Work workRef={workRef} />
        <Projects projectsRef={projectsRef} />
        <Skills skillsRef={skillsRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
      </div>
    </LazyMotion>
  );
}

export default App;
