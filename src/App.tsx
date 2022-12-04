import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Work from "./components/Work";
import { LazyMotion, domAnimation } from "framer-motion";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden mb-20">
        <Navigation
          aboutRef={aboutRef}
          workRef={workRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
          homeRef={homeRef}
        />
        <Socials />
        <Hero workRef={workRef} contactRef={contactRef} homeRef={homeRef} />
        <Work workRef={workRef} />
        <Skills skillsRef={skillsRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
      </div>
    </LazyMotion>
  );
}

export default App;
