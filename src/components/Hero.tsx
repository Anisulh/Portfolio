import { m } from "framer-motion";
import { RefObject } from "react";



interface workProps {
  workRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  homeRef: RefObject<HTMLDivElement> | null;
}

function Hero({ workRef, contactRef, homeRef }: workProps) {
  return (
    <div ref={homeRef}>
      <main className="mx-auto -mt-32 max-w-7xl px-4  sm:px-6  lg:px-8  flex items-center h-screen ">
        <div className="sm:text-center lg:text-left text-gray-300">
          <h1 className="text-lg">Hi, my name is</h1>
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
            <span className="block ">Anisul Haque</span>
            <span className="block text-sky-500">Software Engineer</span>
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Full-Stack Engineer who enjoys all aspects of the development
            process, from desgining to deployment.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-md shadow"
            >
              <a
                onClick={() => workRef?.current?.scrollIntoView()}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 md:py-4 md:px-10 md:text-lg"
              >
                Check Out my Work
              </a>
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-3 sm:mt-0 sm:ml-5"
            >
              <a
                onClick={() => contactRef?.current?.scrollIntoView()}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-100 px-8 py-3 text-base font-medium text-sky-700 hover:bg-sky-200 md:py-4 md:px-10 md:text-lg"
              >
                Contact me
              </a>
            </m.button>
          </div>
        </div>
    
      </main>
    </div>
  );
}

export default Hero;
