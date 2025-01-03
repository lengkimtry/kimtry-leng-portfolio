import React from "react";
import Image from "next/image";
import Link from "next/link";

function My_infor() {
  return (
    <div className="bg-white w-full pt-[5rem] px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight text-[#4c4c4c] mb-[3rem]">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 mb-8 lg:mb-0 lg:ml-[8rem]">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-[#007acc]">
            Bonjour!
          </h2>
          <p className="mt-4 text-base sm:text-lg pr-3">
            I&#39;m Kimtry LENG. I am a third-year student majoring in software
            engineering at the Institute of Technology of Cambodia. I was born
            in a rural area of Kampong Cham province, Cambodia. I was motivated
            to follow my dream and continue to study at university in Phnom
            Penh.
          </p>
        </div>
        <div className="flex-1 lg:pl-[2rem] lg:mr-12">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-[#007acc]">
            Hobbies
          </h1>
          <p className="mt-4 text-base sm:text-lg pr-3">
            I love programming, cooking my favorite food, and also I am a TV
            series lover. I am willing to challenge any hardship to train myself
            as well as boost my academic practice and future career work. I also
            enjoy doing volunteer jobs to learn new things and meet different
            kinds of people. Feel free to get in touch or take a look at my past
            works.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start lg:justify-evenly mt-[3rem]">
            <button className="font-bold text-white hover:text-white px-6 bg-[#007acc] p-3 rounded transition duration-300 hover:bg-opacity-50 mb-4 sm:mb-0 sm:mr-4 flex justify-center">
              <Link
                href="/MyCV1.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </button>

            <div className="flex justify-center sm:justify-start lg:justify-evenly">
              <button>
                <a
                  href="https://github.com/lengkimtry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className=""
                    src={"/github.ico"}
                    alt="Github Icon"
                    width={48}
                    height={48}
                  />
                </a>
              </button>
              <button className="ml-4">
                <a
                  href="https://linkedin.com/in/kim-try-0b20b4315"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className=""
                    src={"/linkedin.ico"}
                    alt="LinkedIn Icon"
                    width={48}
                    height={48}
                  />
                </a>
              </button>
              <button className="ml-4">
                <a
                  href="https://facebook.com/nick.janhbii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className=""
                    src={"/facebook.ico"}
                    alt="Facebook Icon"
                    width={48}
                    height={48}
                  />
                </a>
              </button>
              <button className="ml-4">
                <a
                  href="https://instagram.com/lktoufrance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className=""
                    src={"/instal.ico"}
                    alt="Instagram Icon"
                    width={48}
                    height={48}
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_infor;
