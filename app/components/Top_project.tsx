import React from "react";
import TextboardCard from "./textboardCard";

function Top_project() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="h-10 flex justify-center items-center text-2xl font-bold leading-tight mt-8">
        My Top Project
      </div>
      <div className="flex flex-wrap mt-[3rem] justify-center lg:justify-around w-full px-4 sm:px-6 lg:px-8 mb-3">
      <TextboardCard
          title="SMEAN"
          paragraph="Smean is the web application that converts audio into text and
          generates concise summaries, users see key insights without listening to
          the entire recording. Development tools are NextJS, NestJS, PostgresQL,
          Figma, and Pre-Train Speech to Text Model."
          link="https://kimtry.blog/"
          bgColor="bg-[#00bcd4]"
          buttonColor="bg-[#00bcd4]"
          linkTiles="Visit Website"
        />

        <TextboardCard
          title="Mockexam"
          paragraph="Mockexam is the web application which include the 4 main subjects of the entrance exam to ITC such as Mathematic, Physic, Chemistry and Logical. Mockexam provides the pre-test where it works as the online exam tool, randomly Q&A and student can see the history as well as the solution right after submitted. Development frontend with HTML, CSS(Tailwind), Typscript and NextJS."
          link="https://github.com/lymakara-dev/mockexam"
          bgColor="bg-[#ff9800]"
          buttonColor="bg-[#ff9800]"
          linkTiles="Visit Github"
        />
        <TextboardCard
          title="Wowsoon"
          paragraph="Wowsoon is the food ordering project where the core feature covers including sig in, sign up, cart, tracking delivery, payment method and more. Development Frontend with HTML, CSS(Tailwind), JavaScript and Next JS. Interface designs using Figma."
          link="https://github.com/dynann/WowSoon"
          bgColor="bg-[#f44336]"
          buttonColor="bg-[#f44336]"
          linkTiles="Visit Github"
        />
                <TextboardCard
          title="Phone Edge"
          paragraph="Developed a mobile accessories e-commerce website using Vue.js for
          the frontend and Laravel for the backend, featuring user
          authentication, product management, and order processing.
"
          link="https://phoneedge.makara.blog/products"
          bgColor="bg-[#8bc34a]"
          buttonColor="bg-[#8bc34a]"
          linkTiles="Visit Website"
        />
          <TextboardCard
          title="Codera"
          paragraph="Developed a showcase website for a freelance development team for 
          dynamic project portfolio presentation using NextJS and Tailwind CSS. "
          link="https://codera.makara.blog"
          bgColor="bg-[#ffc107]"
          buttonColor="bg-[#ffc107]"
          linkTiles="Visit Website"
        />
          <TextboardCard
          title="Textboard"
          paragraph="Textboard represents a pioneering online tool developed. It empowers users to input text and personalize its animation, direction, font selection, and other customizable features. Development Frontend with HTML, CSS(Tailwind), JavaScript and ReactJS."
          link="https://gic-textboard.netlify.app/"
          bgColor="bg-[#007acc]"
          buttonColor="bg-[#007acc]"
          linkTiles="Visit Website"
        />
      </div>
    </div>
  );
}

export default Top_project;
