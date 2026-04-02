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
    <div ref={navRef} className="w-full flex gap-12 px-8 border-y-[1px] border-solid border-[#2D2D2D] backdrop-blur-sm bg-background/80">
      <Image
        src={adisaininLogo}
        alt="Adisainin Logo"
        width={44}
        height={44}
      />
      <Tabs
        defaultValue="About Me"
        onValueChange={setMenu}
        className="h-full">
        <TabsList className="w-full bg-transparent justify-start shadow-none rounded-none gap-5 h-full p-0">
          {menu.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="h-full border-0 rounded-none shadow-none border-b-2 border-b-transparent text-base font-medium text-muted-foreground py-6 transition-all duration-300 hover:text-foreground
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
