import React from 'react';

function Body() {
  return (
    <div className='bg-[#4c4c4c] opacity-100 pt-[6rem] h-auto sm:h-[44rem]'>
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center mt-[5rem]"
        style={{ height: "auto" }}
      >
        <div className="relative w-full sm:w-1/2 mb-8 sm:mb-0">
          <img
            className="object-cover w-full rounded-t ml-0 sm:mr-0"
            src="/my_picture2.jpg"
            alt="My Picture 2"
            style={{ height: "auto", maxHeight: "25rem" }}
          />
        </div>
        <div className="absolute sm:ml-6  top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000] to-[#000000] opacity-30 z-10"></div>
        <div className="relative w-full sm:w-1/2 px-6 pl-0 py-12 text-center flex flex-col justify-center z-20">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
            Welcome to Kimtry Leng's Portfolio!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white">
            A Student, Developer, Drama Lover
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
