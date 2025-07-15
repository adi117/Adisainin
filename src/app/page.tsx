"use client"

import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";

export default function Home() {

  const [menu, setMenu] = useState("");

  return (
    <div className="px-4">
      <Navbar setMenu={setMenu}/>

      {menu === "About me" && <AboutPage/>}
      {menu === "Resume" && <ResumePage/>}
      {menu === "Works" && <WorksPage/>}
    </div>
  );
}
