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
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
          clearProps: "all"
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [menu]);

  return (
    <div className="flex flex-col w-full h-[100dvh] overflow-hidden bg-background">
      <Navbar setMenu={setMenu}/>

      <div ref={contentRef} className="flex-1 overflow-hidden px-4 pt-2.5 md:px-6 lg:px-8 md:pt-0">
        {menu === "About Me" && <AboutPage/>}
        {menu === "Resume" && <ResumePage/>}
        {menu === "Works" && <WorkPage/>}
      </div>
    </div>
  );
}
