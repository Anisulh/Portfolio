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
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

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
