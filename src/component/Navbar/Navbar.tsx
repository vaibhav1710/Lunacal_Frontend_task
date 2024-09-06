import React, { useState } from "react";
import { FC } from "react";
import TextArea from "../TextArea/TextArea";

const Navbar: FC = () => {
  const [activeSection, setActiveSection] = useState<string>("About Me");

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full h-full">
      <div className="h-[30%] m-1 p-2">
        <div className="relative flex h-4/5 w-[90%] max-w-5/6 bg-custom-navbar rounded-2xl justify-between items-center text-gray-300 shadow-md m-auto">
          <div
            className={`absolute bottom-0 h-full bg-custom-navbar-layer rounded-2xl transition-transform duration-300 ease-in-out w-1/3 z-0
      ${
        activeSection === "About Me"
          ? "translate-x-0"
          : activeSection === "Experience"
          ? "translate-x-[100%]"
          : "translate-x-[200%]"
      }`}
          ></div>

          {/* Navbar Sections */}
          <div
            className={`About cursor-pointer rounded-2xl flex h-5/6 flex-1 items-center justify-center m-1 z-10
       ${activeSection === "About Me" ? "text-white" : "text-gray-300"} `}
            onClick={() => handleClick("About Me")}
          >
            About Me
          </div>

          <div
            className={`Experience cursor-pointer rounded-2xl h-5/6 flex-1 flex items-center justify-center m-1 z-10
      ${activeSection === "Experience" ? "text-white" : "text-gray-300"}`}
            onClick={() => handleClick("Experience")}
          >
            Experience
          </div>

          <div
            className={`Recommended cursor-pointer rounded-2xl h-5/6 flex-1 flex items-center justify-center m-1 z-10
      ${activeSection === "Recommended" ? "text-white" : "text-gray-300"}`}
            onClick={() => handleClick("Recommended")}
          >
            Recommended
          </div>
        </div>
      </div>

      <div className="h-[70%] p-2">
        <TextArea value={activeSection} />
      </div>
    </div>
  );
};

export default Navbar;
