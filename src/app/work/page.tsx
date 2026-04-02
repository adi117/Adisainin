"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image"
import MaiHomeThumbnail from '../../../public/mai-home/thumbnail.webp'
import PurwafestThumbnail from '../../../public/purwafest/thumbnail.webp'
import GrocereachThumbnail from '../../../public/grocereach/thumbnail.webp'
import JavaAuthThumbnail from '../../../public/java-auth/thumbnail.webp'
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import Grocereach from "../components/works/Grocereach"
import Purwafest from "../components/works/Purwafest"
import MaiHome from "../components/works/MaiHome"
import JavaAuth from "../components/works/JavaAuth"

const portfolioList = [
  { title: "Mai Home", imageSrc: MaiHomeThumbnail, date: "", role: "Frontend" },
  { title: "Purwafest", imageSrc: PurwafestThumbnail, date: "", role: "Fullstack" },
  { title: "Grocereach", imageSrc: GrocereachThumbnail, date: "Jul - Sep 2025", role: "Fullstack" },
  { title: "Java Auth", imageSrc: JavaAuthThumbnail, date: "", role: "Fullstack" },
]

const WorkPage = () => {

  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolioList[0].title);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftCtx = gsap.context(() => {
      const q = gsap.utils.selector(leftRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.from(leftRef.current, { y: 100, opacity: 0, duration: 1 });
      tl.from(q(".card"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      }, "-=0.5");
    }, leftRef);

    return () => {
      leftCtx.revert();
    };
  }, []);

  useEffect(() => {
    if (rightRef.current) {
      const rightCtx = gsap.context(() => {
        const q = gsap.utils.selector(rightRef);
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

        tl.fromTo(rightRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
        tl.from(q(".card"), {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.8,
        }, "-=0.5");
      }, rightRef);

      return () => {
        rightCtx.revert();
      };
    }
  }, [selectedPortfolio]);

  return (
    <div className="w-full h-full text-center justify-end items-center px-4 md:px-6 lg:px-8">
      <Tabs
        value={selectedPortfolio}
        onValueChange={setSelectedPortfolio}
        className="h-full relative flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 h-auto md:h-10/12 overflow-y-auto md:overflow-y-scroll hide-scrollbar">
          <TabsList ref={leftRef} className="flex md:flex-col gap-2 w-full items-start justify-start overflow-x-auto md:overflow-y-scroll hide-scrollbar">
            {portfolioList.map((portfolio) => (
              <TabsTrigger key={portfolio.title} value={portfolio.title} className={cn("flex-shrink-0 md:w-full card transition-all duration-300")}>
                <div className={cn('card flex flex-col gap-3 md:gap-6 p-2 md:p-3 rounded-lg md:rounded-xl border-[1px] border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/15 transition-all duration-300', selectedPortfolio === portfolio.title && "border-primary/60 shadow-[0_0_15px_rgba(107,70,193,0.3)] bg-gradient-to-br from-primary/20 to-secondary/10")}>
                  <Image
                    src={portfolio.imageSrc}
                    alt='Laptop Image'
                    width={200}
                    height={200}
                    className='w-24 md:w-full h-auto rounded-lg md:rounded-xl hover:shadow-[0_0_20px_rgba(107,70,193,0.2)] transition-shadow duration-300'
                  />
                  <div className="hidden md:flex flex-col gap-2">
                    <div className="flex justify-between text-foreground/60 text-sm">
                      <p className="font-medium text-xs">{portfolio.date}</p>
                      <p className="text-secondary font-semibold text-xs">{portfolio.role}</p>
                    </div>
                    <p className="text-lg md:text-xl text-foreground font-semibold">{portfolio.title}</p>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent ref={rightRef} value={selectedPortfolio} className="w-full md:flex-1 overflow-y-auto hide-scrollbar h-auto md:h-10/12 p-4 md:p-6 text-left">
          {selectedPortfolio === "Purwafest"
            ? <Purwafest />
            : selectedPortfolio === "Grocereach"
              ? <Grocereach />
              : selectedPortfolio === "Mai Home"
                ? <MaiHome />
                : selectedPortfolio === "Java Auth"
                && <JavaAuth />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default WorkPage
