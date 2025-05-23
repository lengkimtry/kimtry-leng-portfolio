import Image from "next/image";
import React from "react";

function Body() {
  return (
    <div className="bg-[#4c4c4c] opacity-100 lg:pt-[6rem] h-auto pt-[1rem] sm:h-[44rem]">
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center mt-[1rem]"
        style={{ height: "auto" }}
      >
        <div className="relative w-full sm:w-1/2 mb-8 sm:mb-0">
          <Image
            src={"/my_picture2.JPG"}
            alt="My Picture 2"
            width={377}
            height={350}
            layout="responsive" // Makes the image responsive
            objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
            className="rounded-t"
            priority
            loading="eager" // Disable lazy loading
          />
        </div>
        <div className="absolute sm:ml-6 top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000] to-[#000000] opacity-30 z-10"></div>
        <div className="relative w-full sm:w-1/2 px-6 pl-0 py-12 text-center flex flex-col lg:m-[5rem] justify-center z-20">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
            Welcome to Kimtry Leng&#39;s Portfolio!
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
