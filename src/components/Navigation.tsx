import { Fragment, RefObject } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface navProps {
  workRef: RefObject<HTMLDivElement> | null;
  projectsRef: RefObject<HTMLDivElement> | null;
  aboutRef: RefObject<HTMLDivElement> | null;
  skillsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  homeRef: RefObject<HTMLDivElement> | null;
}

export default function Navigation({
  workRef,
  projectsRef,
  aboutRef,
  skillsRef,
  contactRef,
  homeRef,
}: navProps) {
  const navigation = [
    { name: "Work", ref: workRef },
    { name: "Projects", ref: projectsRef },
    { name: "Skills", ref: skillsRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef },
  ];
  return (
    <div className="z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full relative">
      <div className="pt-6 ">
        <nav
          className="flex items-center justify-between sm:h-10 "
          aria-label="navigation"
        >
          <div className="flex shrink-0 grow items-center lg:grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a
                className="cursor-pointer border-2 rounded-lg p-3 text-white border-sky-400 flex items-center hover:bg-white hover:text-sky-500 transition-colors"
                onClick={() => homeRef?.current?.scrollIntoView()}
              >
                <span className="sr-only">Anisul Haque's Profolio</span>
                AH
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-sky-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      {navigation.map((item) => (
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                key={item.name}
                                onClick={() =>
                                  item.ref?.current?.scrollIntoView()
                                }
                                className={`block link link-underline link-underline-black cursor-pointer rounded-md px-3 py-2 text-base  text-white transition-colors focus:text-sky-400 ${active && "text-sky-400"}`}
                              >
                                {item.name}
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
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
    </div>
  );
}
