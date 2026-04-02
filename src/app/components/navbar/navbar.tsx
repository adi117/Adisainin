"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import adisaininLogo from "@/../public/adisainin-logo.svg"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Navbar = ({ setMenu }: { setMenu: (val: string) => void }) => {

  const menu = ["About Me", "Resume", "Works"];
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={navRef} className="w-full flex gap-6 md:gap-12 px-4 md:px-8 border-y-[1px] border-solid border-[#2D2D2D] backdrop-blur-sm bg-background/80">
      <Image
        src={adisaininLogo}
        alt="Adisainin Logo"
        width={44}
        height={44}
        className="w-10 md:w-11 h-10 md:h-11"
      />
      <Tabs
        defaultValue="About Me"
        onValueChange={setMenu}
        className="h-full flex-1">
        <TabsList className="w-full bg-transparent justify-start shadow-none rounded-none gap-2 md:gap-5 h-full p-0">
          {menu.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="h-full border-0 rounded-none shadow-none border-b-2 border-b-transparent text-xs md:text-sm lg:text-base font-medium text-muted-foreground py-4 md:py-6 transition-all duration-300 hover:text-foreground whitespace-nowrap
             data-[state=active]:border-b-secondary data-[state=active]:text-foreground data-[state=active]:shadow-[0_2px_0_0_#10B981]"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default Navbar;
