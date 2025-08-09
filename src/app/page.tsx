"use client"

import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorkPage from "./work/page";

export default function Home() {

  const [menu, setMenu] = useState("About Me");

  return (
    <div className="px-4 pt-2.5 flex flex-col gap-10 h-[100dvh] overflow-hidden">
      <Navbar setMenu={setMenu}/>

      {menu === "About Me" && <AboutPage/>}
      {menu === "Resume" && <ResumePage/>}
      {menu === "Works" && <WorkPage/>}
    </div>
  );
}
