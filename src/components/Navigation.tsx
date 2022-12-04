import { FC, Fragment, RefObject } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface navProps {
  workRef: RefObject<HTMLDivElement> | null;
  aboutRef: RefObject<HTMLDivElement> | null;
  skillsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  homeRef: RefObject<HTMLDivElement> | null;
}

export default function Navigation({
  workRef,
  aboutRef,
  skillsRef,
  contactRef,
  homeRef,
}: navProps) {
  const navigation = [
    { name: "Work", ref: workRef },
    { name: "Skills", ref: skillsRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef },
  ];
  return (
    <div className="mx-auto max-w-7xl">
      <div className="z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full relative">
        <Popover>
          <div className="px-4 pt-6 sm:px-6 lg:px-8">
            <nav
              className="flex items-center justify-between sm:h-10 "
              aria-label="navigation"
            >
              <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a
                    className="cursor-pointer border-2 rounded-lg p-3 text-white border-sky-400 flex items-center hover:bg-white hover:text-sky-500 transition-colors"
                    onClick={() => homeRef?.current?.scrollIntoView()}
                  >
                    <span className="sr-only">Anisul Haque's Profolio</span>
                    AH
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:space-x-8 md:pr-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => item.ref?.current?.scrollIntoView()}
                    className="font-medium text-gray-200 cursor-pointer link link-underline link-underline-black hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-gray-700 shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <a
                      className="cursor-pointer border-2 rounded-lg p-3 text-white border-sky-400 flex items-center hover:bg-white hover:text-sky-500 transition-colors"
                      onClick={() => homeRef?.current?.scrollIntoView()}
                    >
                      <span className="sr-only">Anisul Haque's Profolio</span>
                      AH
                    </a>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => item.ref?.current?.scrollIntoView()}
                      className="block link link-underline link-underline-black cursor-pointer rounded-md px-3 py-2 text-base  text-white hover:text-sky-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
