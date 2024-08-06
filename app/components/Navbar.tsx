"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="bg-[#2c2c2c] opacity-100 pt-[0.5rem] fixed top-0 w-full z-30">
      <nav className="flex items-center px-10  justify-between">
        <a
          className="flex items-center text-white no-underline text-2xl lg:pb-3 pb-[0.7rem]"
          href="/"
        >
          KIMTRY LENG
        </a>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-right">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex items-center justify-between gap-5 h-16 px-4 sm:px-6 text-white no-underline">
          <Link href="/" passHref>
            <li className="font-bold hover:shadow-lg hover:text-white px-6 hover:bg-[hsla(234,12%,35%,1)] p-2 rounded transition duration-300 hover:bg-opacity-0 ">
              Home
            </li>
          </Link>
          <Link href="/project">
            <li className="font-bold hover:text-white px-6 hover:bg-[hsla(234,12%,35%,1)] p-2 rounded transition duration-300 hover:bg-opacity-25">
              Project
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li className="font-bold hover:text-white px-6 hover:bg-[hsla(234,12%,35%,1)] p-2 rounded transition duration-300 hover:bg-opacity-25">
              Contact
            </li>
          </Link>
          <Link
            href="/MyCV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="font-bold hover:text-white px-6 bg-[#007acc] p-2 rounded transition duration-300 hover:bg-opacity-10">
              Download CV
            </li>
          </Link>
        </ul>
      </nav>

      {isOpen && (
        <div className="flex justify-end">
          <div className="md:hidden bg-black flex flex-col w-[10rem] items-start justify-end self-end mr-[1.02rem] bg-opacity-30">
            <Link href="/" passHref>
              <li
                onClick={toggleMenu}
                className="block font-bold hover:shadow-lg w-[10rem] text-white hover:bg-[hsla(234,12%,35%,1)]  px-6  p-2 transition duration-300 hover:bg-opacity-0"
              >
                Home
              </li>
            </Link>
            <Link href="/project">
              <li
                onClick={toggleMenu}
                className="block font-bold w-[10rem] text-white hover:bg-[hsla(234,12%,35%,1)]  px-6 p-2 transition duration-300 hover:bg-opacity-25"
              >
                Project
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li
                onClick={toggleMenu}
                className="block font-bold w-[10rem] text-white hover:bg-[hsla(234,12%,35%,1)]  px-6  p-2 transition duration-300 hover:bg-opacity-25"
              >
                Contact
              </li>
            </Link>
            <Link
              href="/MyCV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                onClick={toggleMenu}
                className="block font-bold w-[10rem] text-white hover:bg-[hsla(234,12%,35%,1)]  px-6 p-2 transition duration-300 hover:bg-opacity-10"
              >
                Download CV
              </li>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
