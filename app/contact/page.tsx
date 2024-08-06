import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

function ProjectPage() {
  return (
    <div className="mb-8">
      <Navbar />
      <div className="bg-white w-full mt-[8rem] px-4 lg:px-8">
        <h2 className="text-center text-4xl font-bold leading-tight text-[#4c4c4c] mb-[3rem]">
          About Me
        </h2>
        <div className="flex flex-col  lg:flex-row">
          <div className="flex-1 lg:ml-[8rem] mb-6">
            <h2 className="text-3xl font-bold leading-tight text-[#007acc]">
              Bonjour!
            </h2>
            <p className="mt-4 text-lg pr-3">
              I'm Kimtry LENG. I am a third-year student majoring in software
              engineering at the Institute of Technology of Cambodia. I was born
              in a rural area of Kampong Cham province, Cambodia. I was motivated
              to follow my dream and continue to study at university in Phnom
              Penh.
            </p>
          </div>
          <div className="flex-1 lg:pl-[2rem] lg:mr-12">
            <ul className="space-y-4">
              <li className="flex bg-[#007acc] rounded p-2 bg-opacity-20">
                <span className="font-semibold w-32">Age:</span>
                <span className="ml-4">21</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-32">Residence:</span>
                <span className="ml-4">Cambodia</span>
              </li>
              <li className="flex bg-[#007acc] rounded p-2 bg-opacity-20">
                <span className="font-semibold w-32">Address:</span>
                <span className="ml-4">
                  72P St, Kork Kleang Sen Sok Phnom Penh
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold w-32">E-mail:</span>
                <Link
                  className="ml-4 text-[#1a73e8]"
                  href="mailto:kimt47494@gmail.com"
                >
                  kimt47494@gmail.com
                </Link>
              </li>
              <li className="flex bg-[#007acc] rounded p-2 bg-opacity-20">
                <span className="font-semibold w-32">Phone:</span>
                <span className="ml-4">+855 97-265-4163</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-32">Work:</span>
                <span className="ml-4">Looking for internship</span>
              </li>
            </ul>
            <div className="flex justify-evenly mt-[3rem]">
              <button className="font-bold text-white items-center hover:text-white px-6 bg-[#007acc] p-2 rounded transition duration-300 hover:bg-opacity-50 flex flex-grow justify-center">
                <Link
                  href="/MyCV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Link>
              </button>
              <div className="flex justify-evenly flex-grow">
                <button>
                  <Link
                    href="https://github.com/lengkimtry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/github.ico"
                      alt="Github Icon"
                      width={48}
                      height={48}
                    />
                  </Link>
                </button>
                <button>
                  <Link
                    href="https://linkedin.com/in/kim-try-0b20b4315"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/linkedin.ico"
                      alt="LinkedIn Icon"
                      width={48}
                      height={48}
                    />
                  </Link>
                </button>
                <button>
                  <Link
                    href="https://facebook.com/nick.janhbii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/facebook.ico"
                      alt="Facebook Icon"
                      width={48}
                      height={48}
                    />
                  </Link>
                </button>
                <button>
                  <Link
                    href="https://instagram.com/lktoufrance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/instal.ico"
                      alt="Instagram Icon"
                      width={48}
                      height={48}
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
