"use client"

import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar/navbar";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorkPage from "./work/page";
import gsap from "gsap";

export default function Home() {

  const [menu, setMenu] = useState("About Me");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.to(contentRef.current, {
        opacity: 1,
        duration: 0.6,
        clearProps: "all"
      });
    }, contentRef);

    return () => ctx.revert();
  }, [menu]);

  return (
    <div className="px-4 pt-2.5 flex flex-col gap-10 h-[100dvh] overflow-hidden bg-background">
      <Navbar setMenu={setMenu}/>

      <div ref={contentRef} className="opacity-0">
        {menu === "About Me" && <AboutPage/>}
        {menu === "Resume" && <ResumePage/>}
        {menu === "Works" && <WorkPage/>}
      </div>
    </div>
  );
}
