import React from 'react';

interface TextboardCardProps {
  title: string;
  paragraph: string;
  link: string;
  bgColor: string;
  buttonColor: string;
  linkTiles: string;
}

const TextboardCard: React.FC<TextboardCardProps> = ({ title, paragraph, link, bgColor, buttonColor, linkTiles }) => {
  return (
    <div className={`flex flex-col justify-center items-start mt-3 min-h-[15rem] w-full sm:w-[25rem] rounded-md p-4 ${bgColor}`}>
      <div className="flex-1">
        <h2 className="text-2xl font-bold leading-tight text-white">
          {title}
        </h2>
        <p className="mt-7 text-lg text-white">
          {paragraph}
        </p>
      </div>
      <button className={`mt-[4rem] pb-2 font-bold text-white ${buttonColor}`}>
        <a className="hover:text-white px-6 p-2 rounded transition duration-300 hover:bg-opacity-5" href={link}>{linkTiles}</a>
      </button>
    </div>
  );
};

export default TextboardCard;