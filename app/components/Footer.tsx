import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4c4c4c] text-white">
      <div className="w-full h-auto flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-start lg:p-10 pt-7">
        {/* Contact Section */}
        <div className="flex flex-col mb-6 lg:mb-0  ">
          <div className="text-2xl leading-tight mb-4">Contact Me</div>
          <ul>
            <li className="flex mb-2">
              <span className="w-24 lg:w-32">E-mail:</span>
              <Link href="mailto:kimt47494@gmail.com" className="ml-4 text-[#1a73e8]">
                kimt47494@gmail.com
              </Link>
            </li>
            <li className="flex mb-2">
              <span className="w-24 lg:w-32">Phone:</span>
              <span className="ml-4">+855 97-265-4163</span>
            </li>
            <li className="flex mb-2">
              <span className="w-24 lg:w-32">Discord:</span>
              <Link href="https://discord.com/users/1017834367088873542" className="ml-4" target="_blank" rel="noopener noreferrer">
                @lengkimtry
              </Link>
            </li>
            <li className="flex mb-2">
              <span className="w-24 lg:w-32">LinkedIn:</span>
              <Link href="https://www.linkedin.com/in/kim-try-0b20b4315" className="ml-4 text-[#1a73e8]" target="_blank" rel="noopener noreferrer">
                @lengkimtry
              </Link>
            </li>
          </ul>
        </div>
        {/* Site Map Section */}
        <div className="flex flex-col mb-6 lg:mb-0 mr-[9.2rem]">
          <div className="text-2xl leading-tight mb-4">Site Map</div>
          <ul>
            <li className="mb-2">
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/project" className="text-white">
                Project
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/cv" className="text-white">
                My CV
              </Link>
            </li>
            <li className="mb-2">
            <a className="" href="https://github.com/lengkimtry/kimtry-leng-portfolio">Visit Source Code</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#4c4c4c] text-white pb-3 text-center">
        <p>© 2024 KimtryLeng.</p>
      </div>
    </footer>
  );
};

export default Footer;
