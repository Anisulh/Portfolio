import { m } from "framer-motion";

function About({ aboutRef }) {
  return (
    <m.div
      className="mx-auto max-w-7xl mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div ref={aboutRef} className="mx-10">
        <h4 className="text-3xl text-gray-100  mb-10 font-medium ">About</h4>
        <div className="max-w-2xl text-gray-300 ">
          <p className="text-lg mb-5">
            Currently, I am finishing up my final semester at Hunter College and
            graduating with a degree in Human Biology. I spent a majority of my
            time working towards a Human Biology degree because I enjoyed the
            subject but didn't really know what I could do with it as the
            professions didn't interest me. It's odd, I know but I found my
            passion for coding late last year and since then have been teaching
            myself how to code on my free time on top of doing my major work.
          </p>
          <p className="text-lg">
            I enjoy working on all aspects of a project, from the design to
            deployment I make sure everything is how it should be. I'm always
            looking for new ways to incorporate new technologies into my
            projects and hone my existing skills. Right now, I'm learning to
            work with typescript and get better at TDD.
          </p>
        </div>
      </div>
    </m.div>
  );
}

export default About;
