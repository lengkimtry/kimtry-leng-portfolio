import React from "react";

const My_skill: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[3rem] justify-around w-full px-4 sm:px-6 lg:px-8">
      <div className="flex text-xl leading-tight mb-8 lg:mb-0 lg:ml-10 lg:pl-10">
        <div className="flex-1 p-4 border-2 border-gray-300 rounded-lg flex items-center">
          <ul className="space-y-4">
            <li className="flex bg-[#007acc] rounded p-2 bg-opacity-20">
              <span className="font-semibold w-32">Age:</span>
              <span className="ml-4">21</span>
            </li>
            <li className="flex pl-2">
              <span className="font-semibold w-32">Residence:</span>
              <span className="ml-4">Cambodia</span>
            </li>
            <li className="flex bg-[#007acc] rounded p-2 bg-opacity-20">
              <span className="font-semibold w-32">Address:</span>
              <span className="ml-4">
                72P St, Kork Kleang Sen Sok Phnom Penh
              </span>
            </li>
            <li className="flex pl-2">
              <span className="font-semibold w-32">E-mail:</span>
              <a
                className="ml-4 text-[#1a73e8]"
                href="mailto:kimt47494@gmail.com"
              >
                kimt47494@gmail.com
              </a>
            </li>
            <li className="flex bg-[#007acc] rounded p-2 bg-opacity-20">
              <span className="font-semibold w-32">Phone:</span>
              <span className="ml-4">+855 97-265-4163</span>
            </li>
            <li className="flex pl-2">
              <span className="font-semibold w-32">Work:</span>
              <span className="ml-4">Looking for internship</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex text-xl lg:text-4xl font-bold leading-tight lg:mr-16 lg:pr-5">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-2 justify-center p-5 rounded-xl">
          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">HTML</h1>
            <h2 className="text-sm">80%</h2>
          </div>
          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">CSS</h1>
            <h2 className="text-sm">80%</h2>
          </div>
          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Tailwind</h1>
            <h2 className="text-sm">80%</h2>
          </div>
          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Javascript</h1>
            <h2 className="text-sm">70%</h2>
          </div>
          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">C++</h1>
            <h2 className="text-sm">60%</h2>
          </div>
          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Java</h1>
            <h2 className="text-sm">60%</h2>
          </div>

          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">NextJS</h1>
            <h2 className="text-sm">70%</h2>
          </div>

          <div className="p-4 border-4 border-[#007acc] rounded-2xl text-center bg-white shadow-sm w-full h-32 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">NestJS</h1>
            <h2 className="text-sm">54%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_skill;
