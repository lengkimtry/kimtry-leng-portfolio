import React from "react";
import Navbar from "../components/Navbar";

function ProjectPage() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col p-4 items-center min-h-screen mt-[5rem]">
      <div className="h-10 flex justify-center items-center text-2xl font-bold leading-tight mt-8">
        My Top Project
      </div>
      <div>
        <div className="flex flex-col justify-center items-start mt-3 min-h-[15rem] w-[25rem] rounded-md bg-[#007acc] p-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold leading-tight text-white">
              Textboard
            </h2>
            <p className="mt-7 text-lg text-white">
            Textboard represents a pioneering online tool developed by the 2024 I3 GIC2B at Institute of Technology of Cambodia. It empowers users to input text and personalize its animation, direction, font selection, and other customizable features.
            </p>
          </div>
          <button className="mt-[6rem] font-bold text-white ">
            <a className=" hover:text-white px-6 bg-[#007acc] p-2 rounded transition duration-300 hover:bg-opacity-5 hover:bg-[#cc000042]" href="https://gic-textboard.netlify.app/">VISIT WEBSITE</a>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectPage;
