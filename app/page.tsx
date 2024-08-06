import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import My_infor from "./components/My_infor";
import My_skill from "./components/My_skill";
import Home_portfo from "./components/Home_portfo";
import Top_project from "./components/Top_project";
import Footer from "./components/Footer";

function page() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <My_infor/>
      <My_skill/>
      <Home_portfo/>
      <Top_project/>
      
    </div>
  );
}

export default page;
