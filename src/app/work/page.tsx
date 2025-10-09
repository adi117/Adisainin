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
    <div className="text-5xl w-full h-screen text-center justify-end items-center">
      <Tabs
        value={selectedPortfolio}
        onValueChange={setSelectedPortfolio}
        className="h-full relative flex flex-row">
        <div className="w-1/4 h-10/12 overflow-y-scroll hide-scrollbar">
          <TabsList ref={leftRef} className="flex flex-col gap-1 w-full items-start justify-start h-full overflow-y-scroll hide-scrollbar">
            {portfolioList.map((portfolio) => (
              <TabsTrigger key={portfolio.title} value={portfolio.title} className={cn("w-full card")}>
                <div className={cn('card flex flex-col gap-6 p-3 rounded-xl border-[1px] border-foreground/5', selectedPortfolio === portfolio.title && "border-[1px] border-foreground shadow-[0_0_0_4px_rgba(48,41,48,0.25)]")}>
                  <Image
                    src={portfolio.imageSrc}
                    alt='Laptop Image'
                    width={200}
                    height={200}
                    className='w-full h-auto rounded-xl'
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-foreground/50">
                      <p className="">{portfolio.date}</p>
                      <p>{portfolio.role}</p>
                    </div>
                    <p className="text-xl text-foreground">{portfolio.title}</p>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent ref={rightRef} value={selectedPortfolio} className="flex-1 overflow-y-scroll hide-scrollbar h-10/12 p-6 text-left">
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