"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import adisaininLogo from "@/../public/adisainin-logo.svg"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const Navbar = ({ setMenu }: { setMenu: (val: string) => void }) => {

  const menu = ["About Me", "Resume", "Works"];
  const navRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleMenuClick = (tab: string) => {
    setMenu(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div ref={navRef} className="w-full flex gap-6 md:gap-12 px-4 md:px-8 border-b-[1px] border-solid border-[#2D2D2D] backdrop-blur-sm bg-background/80">
        <Image
          src={adisaininLogo}
          alt="Adisainin Logo"
          width={44}
          height={44}
          className="w-10 md:w-11 h-10 md:h-11"
        />
        {/* Desktop Menu */}
        <Tabs
          defaultValue="About Me"
          onValueChange={setMenu}
          className="hidden md:flex h-full flex-1">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 justify-center items-center ml-auto"
        >
          <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-background/95 backdrop-blur-sm border-b-[1px] border-[#2D2D2D] animate-slide-in-top">
          <div className="flex flex-col gap-0 px-4 py-4">
            {menu.map((tab) => (
              <button
                key={tab}
                onClick={() => handleMenuClick(tab)}
                className="text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-secondary"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;
