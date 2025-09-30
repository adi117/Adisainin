"use client"

import Section from '../components/section/section';
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
import { useEffect, useRef } from 'react';

const techLogos = [
  { src: DockerLogo, alt: "Docker" },
  { src: FigmaLogo, alt: "Figma" },
  { src: NextJsLogo, alt: "Next.js" },
  { src: PostgresLogo, alt: "PostgreSQL" },
  { src: ReactLogo, alt: "React" },
  { src: SpringLogo, alt: "Spring" },
  { src: TailwindLogo, alt: "Tailwind CSS" }
];

const ResumePage = () => {

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
    <div className="px-4 flex w-full justify-between gap-5 overflow-hidden">
      <div ref={leftRef} className="w-full">
        <Section title='Experience'>
          <div className='flex flex-col gap-9 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
            <div className="card w-full bg-[#874FD4] flex flex-col gap-5 p-5 rounded-3xl transition-shadow duration-200">
              <p className='text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit'>2024</p>
              <div className='flex flex-col text-background font-medium'>
                <p className='text-xl opacity-50'>Vektora Studio</p>
                <p className='text-2xl'>
                  UI/UX Designer
                  <br />
                  Intern
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <div className="rounded-full h-2 w-2 bg-background" />
                  <div className="w-full h-0.5 bg-background" />
                  <div className="rounded-full h-2 w-2 bg-background" />
                </div>
                <div className='w-full flex justify-between'>
                  <p className="text-background font-medium w-full text-left">Mar</p>
                  <p className="text-background font-medium w-full text-right">May</p>
                </div>
              </div>
            </div>
            <div className="card w-full bg-[#91D1AE] flex flex-col gap-5 p-5 rounded-3xl transition-shadow duration-200">
              <p className='text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit'>2023</p>
              <div className='flex flex-col text-foreground font-medium'>
                <p className='text-xl opacity-50'>SkillMapper</p>
                <p className='text-2xl'>
                  UI/UX Designer
                  <br />
                  Intern
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <div className="rounded-full h-2 w-2 bg-foreground" />
                  <div className="w-full h-0.5 bg-foreground" />
                  <div className="rounded-full h-2 w-2 bg-foreground" />
                </div>
                <div className='w-full flex justify-between'>
                  <p className="text-foreground font-medium w-full text-left">Mar</p>
                  <p className="text-foreground font-medium w-full text-right">Dec</p>
                </div>
              </div>
            </div>
            <div className="card border-[1px] border-solid border-foreground w-full bg-transparent flex flex-col gap-5 p-5 rounded-3xl transition-shadow duration-200">
              <p className='text-background bg-foreground font-semibold px-2 py-0.5 rounded-full w-fit'>2022</p>
              <div className='flex flex-col text-foreground font-medium'>
                <p className='text-xl opacity-50'>Atourin</p>
                <p className='text-2xl'>
                  Creative & UI Designer
                  <br />
                  Intern
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <div className="rounded-full h-2 w-2 bg-foreground" />
                  <div className="w-full h-0.5 bg-foreground" />
                  <div className="rounded-full h-2 w-2 bg-foreground" />
                </div>
                <div className='w-full flex justify-between'>
                  <p className="text-foreground font-medium w-full text-left">Feb</p>
                  <p className="text-foreground font-medium w-full text-right">May</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

      </div>
      {/* divider */}
      <div ref={leftLine} className='h-full w-1 bg-foreground py-10' />

      <div ref={centerRef} className='w-full h-full overflow-y-scroll max-h-full hide-scrollbar pb-10'>
        <div className="flex flex-col gap-9 h-fit mb-5">
          <h2 className="card text-3xl font-semibold shrink-0">Expertise</h2>
          <p className='card font-medium text-xl pb-3 border-b-[1px] border-solid border-foreground'>UI/UX, Interaction Design, Design Systems, Frontend Dev, Fullstack Dev, Prototyping, Visual Design, Responsive UI, Code Architecture, Design Thinking.</p>
        </div>
        <div className="flex flex-col gap-9 h-fit mb-5">
          <h2 className="card text-3xl font-semibold shrink-0">Hardskill</h2>
          <div className='card flex flex-col gap-6 p-3 rounded-4xl bg-foreground'>
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
        <div className="flex flex-col gap-9 h-fit">
          <h2 className="card text-3xl font-semibold shrink-0">Softskill</h2>
          <div>
            <div className='flex flex-wrap gap-3'>
              <p className='card text-background bg-foreground font-semibold py-1 px-3 rounded-full w-fit'>problemSolving</p>
              <p className='card text-foreground bg-background font-semibold py-1 px-3 rounded-full w-fit border-[1px] border-solid border-foreground'>adaptability</p>
              <p className='card text-background bg-foreground font-semibold py-1 px-3 rounded-full w-fit'>collaboration</p>
              <p className='card text-foreground bg-background font-semibold py-1 px-3 rounded-full w-fit border-[1px] border-solid border-foreground'>communication</p>
              <p className='card text-foreground bg-background font-semibold py-1 px-3 rounded-full w-fit border-[1px] border-solid border-foreground'>creativity</p>
              <p className='card text-foreground bg-background font-semibold py-1 px-3 rounded-full w-fit border-[1px] border-solid border-foreground'>attentionToDetail</p>
              <p className='card text-background bg-foreground font-semibold py-1 px-3 rounded-full w-fit'>empathy</p>
              <p className='card text-background bg-foreground font-semibold py-1 px-3 rounded-full w-fit'>curiosity</p>
              <p className='card text-foreground bg-background font-semibold py-1 px-3 rounded-full w-fit border-[1px] border-solid border-foreground'>timeManagement</p>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div ref={rightLine} className='h-full w-1 bg-foreground py-10' />
      <div ref={rightRef} className="w-full">
        <Section title='Education'>
          <div className='flex flex-col gap-9 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
            <div className="card w-full bg-[#91D1AE] flex flex-col gap-5 p-5 rounded-3xl transition-shadow duration-200">
              <p className='text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit'>2025</p>
              <div className='flex flex-col text-foreground font-medium'>
                <p className='text-xl opacity-50'>Bootcamp</p>
                <p className='text-2xl'>
                  Software Engineering/
                  <br />
                  Purwadhika DTI
                </p>
              </div>
            </div>
            <div className="card border-[1px] border-solid border-foreground w-full bg-transparent flex flex-col gap-5 p-5 rounded-3xl transition-shadow duration-200">
              <p className='text-background bg-foreground font-semibold px-2 py-0.5 rounded-full w-fit'>2023-2024</p>
              <div className='flex flex-col text-foreground font-medium'>
                <p className='text-xl opacity-50'>Bootcamp</p>
                <p className='text-2xl'>
                  My Digital Academy/
                  <br />
                  Bank Mandiri
                </p>
              </div>
            </div>
            <div className="card w-full bg-[#874FD4] flex flex-col gap-5 p-5 rounded-3xl transition-shadow duration-200">
              <p className='text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit'>2019-2023</p>
              <div className='flex flex-col text-background font-medium'>
                <p className='text-xl opacity-50'>Bachelor Degree</p>
                <p className='text-2xl'>
                  Information System/
                  <br />
                  Brawijaya University
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default ResumePage;