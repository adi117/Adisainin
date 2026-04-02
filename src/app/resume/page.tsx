"use client"

import Image from 'next/image';
import LaptopImage from '../../../public/laptop-image.webp'
import DockerLogo from '../../../public/docker-plain.svg'
import FigmaLogo from '../../../public/figma-original.svg'
import NextJsLogo from '../../../public/nextjs-original.svg'
import PostgresLogo from '../../../public/postgresql-plain.svg'
import ReactLogo from '../../../public/react-original.svg'
import SpringLogo from '../../../public/spring-original.svg'
import TailwindLogo from '../../../public/tailwindcss-plain.svg'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Educations from '../components/resume/Educations';
import Experiences from '../components/resume/Experiences';
import { cn } from '@/lib/utils';

const techLogos = [
  { src: DockerLogo, alt: "Docker" },
  { src: FigmaLogo, alt: "Figma" },
  { src: NextJsLogo, alt: "Next.js" },
  { src: PostgresLogo, alt: "PostgreSQL" },
  { src: ReactLogo, alt: "React" },
  { src: SpringLogo, alt: "Spring" },
  { src: TailwindLogo, alt: "Tailwind CSS" }
];

const softskills = [
  { skill: "problemSolving", theme: "dark" },
  { skill: "adaptability", theme: "light" },
  { skill: "collaboration", theme: "dark" },
  { skill: "communication", theme: "light" },
  { skill: "creativity", theme: "light" },
  { skill: "attentionToDetail", theme: "light" },
  { skill: "empathy", theme: "dark" },
  { skill: "curiosity", theme: "dark" },
  { skill: "timeManagement", theme: "light" },
]

const ResumePage = () => {

  const [mobileTab, setMobileTab] = useState<'expertise' | 'education' | 'experience'>('expertise');
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftLine = useRef<HTMLDivElement>(null);
  const rightLine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftCtx = gsap.context(() => {
      const q = gsap.utils.selector(leftRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.from(leftRef.current, { y: 100, opacity: 0, duration: 1 });
      tl.from(q(".card"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
      }, "-=0.5");
    }, leftRef);

    const centerCtx = gsap.context(() => {
      const q = gsap.utils.selector(centerRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.from(q(".card"), {
        y: 60,
        opacity: 0,
        duration: 2,
        stagger: 0.15,
      });
    }, centerRef);

    const rightCtx = gsap.context(() => {
      const q = gsap.utils.selector(rightRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.from(rightRef.current, { y: 100, opacity: 0, duration: 1 });
      tl.from(q(".card"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
      }, "-=0.5");
    }, rightRef);

    const lineCtx = gsap.context(() => {
      gsap.from(leftLine.current, {
        y: 200,
        opacity: 0,
        duration: 3,
        ease: "power3.inOut"
      });

      gsap.from(rightLine.current, {
        y: 200,
        opacity: 0,
        duration: 3,
        ease: "power3.inOut"
      });
    })

    return () => {
      leftCtx.revert();
      centerCtx.revert();
      rightCtx.revert();
      lineCtx.revert();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Mobile Tabs */}
      <div className="md:hidden flex gap-2 px-4 py-3 border-b-[1px] border-[#2D2D2D] bg-background/50 backdrop-blur-sm sticky top-0 z-10">
        {['expertise', 'education', 'experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setMobileTab(tab as typeof mobileTab)}
            className={cn(
              'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize',
              mobileTab === tab
                ? 'bg-primary/20 text-secondary border-[1px] border-secondary'
                : 'text-foreground/60 border-[1px] border-transparent hover:text-foreground'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row w-full justify-between gap-4 md:gap-5 overflow-hidden flex-1">
        <div ref={leftRef} className="w-full md:w-1/3 hidden md:block">
          <Experiences />
        </div>
        {/* divider */}
        <div ref={leftLine} className='hidden md:block h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent py-10' />

        <div ref={centerRef} className='w-full md:w-1/3 h-auto md:h-full overflow-y-auto max-h-full hide-scrollbar pb-10'>
          <div className="flex flex-col gap-4 md:gap-5 h-fit mb-5">
            <h2 className="card text-2xl md:text-3xl font-semibold shrink-0 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Expertise</h2>
            <p className='card font-medium text-sm md:text-base lg:text-xl pb-3 border-b-[1px] border-solid border-secondary/40 bg-gradient-to-r from-secondary/5 to-accent/5 px-4 py-3 rounded-lg'>UI/UX, Interaction Design, Design Systems, Frontend Dev, Fullstack Dev, Prototyping, Visual Design, Responsive UI, Code Architecture, Design Thinking.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 h-fit mb-5">
            <h2 className="card text-2xl md:text-3xl font-semibold shrink-0 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hardskill</h2>
            <div className='card flex flex-col gap-6 p-3 rounded-4xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-[1px] border-primary/30'>
              <Image
                src={LaptopImage}
                alt='Laptop Image'
                width={370}
                height={200}
                className='w-full h-auto'
              />
              <div className="flex items-center">
                {techLogos.map((tech, index) => (
                  <div
                    key={index}
                    className={`p-2 bg-background rounded-full border-4 border-background -ml-4 ${index === 0 ? "ml-0" : ""
                      }`}
                    style={{ zIndex: techLogos.length - index }}
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={60}
                      height={60}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 h-fit">
            <h2 className="card text-2xl md:text-3xl font-semibold shrink-0">Softskill</h2>
            <div>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {softskills.map((softskill, index) => (
                  <p key={index} className={cn('card font-semibold text-xs md:text-sm py-1 px-3 rounded-full w-fit', softskill.theme === 'dark' ? "text-background bg-foreground" : "text-foreground bg-background border-[1px] border-solid border-foreground")}>{softskill.skill}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* divider */}
        <div ref={rightLine} className='hidden md:block h-full w-1 bg-gradient-to-b from-accent via-secondary to-primary py-10' />
        <div ref={rightRef} className="w-full md:w-1/3 hidden md:block">
          <Educations />
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden flex-1 overflow-y-auto hide-scrollbar pb-10">
        {mobileTab === 'expertise' && (
          <div className="p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-4 h-fit mb-5">
              <h2 className="card text-2xl font-semibold shrink-0 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Expertise</h2>
              <p className='card font-medium text-sm pb-3 border-b-[1px] border-solid border-secondary/40 bg-gradient-to-r from-secondary/5 to-accent/5 px-4 py-3 rounded-lg'>UI/UX, Interaction Design, Design Systems, Frontend Dev, Fullstack Dev, Prototyping, Visual Design, Responsive UI, Code Architecture, Design Thinking.</p>
            </div>
            <div className="flex flex-col gap-4 h-fit mb-5">
              <h2 className="card text-2xl font-semibold shrink-0 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hardskill</h2>
              <div className='card flex flex-col gap-6 p-3 rounded-4xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-[1px] border-primary/30'>
                <Image
                  src={LaptopImage}
                  alt='Laptop Image'
                  width={370}
                  height={200}
                  className='w-full h-auto'
                />
                <div className="flex items-center overflow-x-auto">
                  {techLogos.map((tech, index) => (
                    <div
                      key={index}
                      className={`p-2 bg-background rounded-full border-4 border-background -ml-4 flex-shrink-0 ${index === 0 ? "ml-0" : ""
                        }`}
                      style={{ zIndex: techLogos.length - index }}
                    >
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 h-fit">
              <h2 className="card text-2xl font-semibold shrink-0">Softskill</h2>
              <div>
                <div className='flex flex-wrap gap-2'>
                  {softskills.map((softskill, index) => (
                    <p key={index} className={cn('card font-semibold text-xs py-1 px-3 rounded-full w-fit', softskill.theme === 'dark' ? "text-background bg-foreground" : "text-foreground bg-background border-[1px] border-solid border-foreground")}>{softskill.skill}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {mobileTab === 'education' && (
          <div className="p-4">
            <Educations />
          </div>
        )}
        {mobileTab === 'experience' && (
          <div className="p-4">
            <Experiences />
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumePage;
