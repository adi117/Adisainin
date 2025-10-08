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
import GolangLogo from '../../../public/go-original-wordmark.svg'
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

const purwadhikaEdu = [
  { src: DockerLogo, alt: "Docker" },
  { src: NextJsLogo, alt: "Next.js" },
  { src: PostgresLogo, alt: "PostgreSQL" },
  { src: SpringLogo, alt: "Spring" },
  { src: TailwindLogo, alt: "Tailwind CSS" },
  { src: GolangLogo, alt: "Golang Logo"}
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
          <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
            <div className="card w-full bg-[#874FD4] flex flex-col gap-3 p-5 rounded-3xl transition-shadow duration-200">
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
            <div className="card w-full bg-[#91D1AE] flex flex-col gap-3 p-5 rounded-3xl transition-shadow duration-200">
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
            <div className="card border-[1px] border-solid border-foreground w-full bg-transparent flex flex-col gap-3 p-5 rounded-3xl transition-shadow duration-200">
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
        <div className="flex flex-col gap-5 h-fit mb-5">
          <h2 className="card text-3xl font-semibold shrink-0">Expertise</h2>
          <p className='card font-medium text-xl pb-3 border-b-[1px] border-solid border-foreground'>UI/UX, Interaction Design, Design Systems, Frontend Dev, Fullstack Dev, Prototyping, Visual Design, Responsive UI, Code Architecture, Design Thinking.</p>
        </div>
        <div className="flex flex-col gap-5 h-fit mb-5">
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
        <div className="flex flex-col gap-5 h-fit">
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
          <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
            <div className="card group w-full bg-[#91D1AE] flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <p className="text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit">
                2025
              </p>

              <div className="flex flex-col text-foreground font-medium">
                <p className="text-xl opacity-50">Bootcamp</p>
                <p className="text-2xl">
                  Software Engineering/
                  <br />
                  Purwadhika DTI
                </p>
              </div>

              <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
                <p className="text-foreground/80">
                  Completed an intensive Software Engineering Bootcamp at Purwadhika Digital Technology School, specializing in full-stack web development using <strong>React, Next.js, Java Spring Boot,</strong> and <strong>PostgreSQL</strong>.
                </p>
                <ul className="list-disc list-inside text-foreground/70 text-sm">
                  <li>Developed and deployed scalable full-stack web applications following system design principles</li>
                  <li>Built RESTful APIs, implemented caching with Redis, and integrated Grafana for performance monitoring</li>
                  <li>Utilized Docker for containerized deployment and Git + Agile for team collaboration</li>
                  <li>Enhanced backend expertise through Golang and GraphQL</li>
                </ul>
                <div className="flex items-center mt-5">
                  {purwadhikaEdu.map((tech, index) => (
                    <div
                      key={index}
                      className={`p-1 bg-background rounded-full border-1 border-background -ml-2.5 ${index === 0 ? "ml-0" : ""
                        }`}
                      style={{ zIndex: techLogos.length - index }}
                    >
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={24}
                        height={24}
                        className='text-white'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card group w-full border border-foreground bg-transparent flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <p className='text-background bg-foreground font-semibold px-2 py-0.5 rounded-full w-fit'>2023-2024</p>
              <div className='flex flex-col text-foreground font-medium'>
                <p className='text-xl opacity-50'>Bootcamp</p>
                <p className='text-2xl'>
                  My Digital Academy/
                  <br />
                  Bank Mandiri
                </p>
              </div>

              <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
                <p className="text-foreground/80">
                  Focused on data analytics, dashboard development, and mobile app creation using OutSystems. Gained hands-on experience in Python for data processing, low-code development, and data-driven problem solving
                </p>
                <ul className="list-disc list-inside text-foreground/70 text-sm">
                  <li>Gained hands-on experience in data analytics, building interactive dashboards, and performing data visualization using Python</li>
                  <li>Developed mobile applications using OutSystems, applying low-code development principles to solve real business challenges</li>
                  <li>Deployed projects to production</li>
                </ul>
              </div>
            </div>

            <div className="card group w-full bg-[#874FD4] flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <p className='text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit'>2019-2023</p>
              <div className='flex flex-col text-background font-medium'>
                <p className='text-xl text-background/50'>Bachelor Degree</p>
                <p className='text-2xl text-background'>
                  Information System/
                  <br />
                  Brawijaya University
                </p>
              </div>

              <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
                <p className="text-background/70">
                  Completed a Bachelor’s Degree in Information Systems at Universitas Brawijaya, focusing on system design, data modeling, and software development methodologies.
                </p>
                <ul className="list-disc list-inside text-background/60 text-sm">
                  <li>Cumulative GPA: 3.71 / 4.00</li>
                  <li>Completed the KMMI Program on Data Mining with Python (Ministry of Education) with a final grade of A</li>
                  <li>Developed strong technical foundations in system design, covering PRD creation, database schema design (ERD), sequence diagrams, system requirement analysis, and data modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default ResumePage;