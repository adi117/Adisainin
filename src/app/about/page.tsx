"use client"

import Image from "next/image";
import ProfilePhoto from "@/../public/profile-photo.webp"
import Section from "../components/section/section";
import GithubLogo from "@/../public/github-logo.svg"
import Linkedinlogo from "@/../public/linkedin-logo.svg"
import GoogleLogo from "@/../public/google-logo.svg"
import WizardHat from "@/../public/wizard-hat.webp"
import Vector1 from "@/../public/Vector-1.svg"
import Vector2 from "@/../public/Vector.svg"
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutPage = () => {

  const imageRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introductionCtx = gsap.context(() => {
      const q = gsap.utils.selector(introductionRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.from(introductionRef.current, { y: 100, opacity: 0, duration: 1.2 });
      tl.from(q(".card"), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
      }, "-=0.6");
    }, introductionRef);

    const imageCtx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.from(imageRef.current, {
        y: 200,
        opacity: 0,
        duration: 2,
      });
      
      // Add subtle floating animation
      gsap.to(imageRef.current, {
        y: 10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    })

    return () => {
      introductionCtx.revert();
      imageCtx.revert();
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-9 px-4 md:px-6 lg:px-8 overflow-hidden w-full" style={{ height: "calc(100vh - 160px)" }}>
      <div
        ref={imageRef}
        className="relative w-full md:w-2/5 h-64 md:h-full group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-4xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
        <Image
          src={ProfilePhoto}
          alt="Profile Photo"
          priority
          className="w-full h-full object-cover rounded-4xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300"
        />
        <div className="font-medium text-foreground flex flex-col absolute left-4 md:left-7 top-4 md:top-7 z-10">
          <p className="text-lg md:text-2xl font-light">Hello,</p>
          <p className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            I&apos;m Adi
          </p>
        </div>
        <div className="hidden md:block text-sm text-foreground/80 absolute right-7 bottom-7 text-right w-[400px] bg-background/50 backdrop-blur-sm p-4 rounded-2xl border-[1px] border-primary/20 z-10">
          A fullstack developer with a creative mindset. Detail-oriented, adaptable,
          and a bit of a perfectionist, I thrive on collaboration, clear
          communication, and solving problems with both logic and creativity.
        </div>
      </div>
      <div className="w-full md:w-3/5 h-auto md:h-full overflow-y-auto max-h-full hide-scrollbar pb-10">
        <div ref={introductionRef} className="flex flex-col gap-10">
          {/* Introduction section */}
          <Section title="Introduction">
            <div className="card flex flex-col gap-6 md:gap-9 px-4 md:px-8 py-3 border-[1px] border-solid border-primary/30 rounded-2xl md:rounded-[36px] bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/60 transition-all duration-300">
              <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-foreground to-secondary/80 bg-clip-text text-transparent">A wizard based in Surakarta</h2>
              <div className="flex relative">
                <p className="opacity-70 md:pr-44 font-medium text-foreground/80 text-sm md:text-base">
                  Once a UI/UX spellcaster, now a fullstack wizard—I craft seamless digital experiences from pixel to production. With roots in world and interaction design, I blend creative vision with technical precision to build products that are as powerful as they are beautiful.
                  <br />
                  <br />
                  Let&apos;s make the web more magical—one pixel at a time.</p>

                <Image
                  src={WizardHat}
                  alt="Wizard Hat"
                  priority
                  className="hidden md:block w-32 md:w-40 h-32 md:h-40 object-cover absolute right-0 bottom-0 opacity-80"
                />
              </div>
            </div>
          </Section>
          {/* divider line */}
          <div className="w-full bg-gradient-to-r from-primary via-secondary to-accent h-[1px]" />
          <div className="card">
            {/* contact card */}
            <Section title="Get In Touch">
              <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8">
                <a
                  href="mailto:muhammadiwicaksono@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card w-full bg-gradient-to-br from-primary to-primary/80 flex flex-col gap-6 md:gap-14 p-4 md:p-5 rounded-2xl md:rounded-3xl hover:shadow-[0_0_0_8px_rgba(107,70,193,0.2)] transition-all duration-300 hover:cursor-pointer relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-secondary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={GoogleLogo}
                    alt="Google Logo"
                    width={48}
                    height={48}
                    className="relative z-10"
                  />
                  <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center">
                      <div className="rounded-full h-1.5 w-1.5 bg-foreground" />
                      <div className="w-full h-[1px] bg-foreground" />
                      <div className="rounded-full h-1.5 w-1.5 bg-foreground" />
                    </div>
                    <p className="text-foreground font-medium w-full text-right">muhammadiwicaksono@gmail.com</p>
                  </div>

                  <Image
                    src={Vector1}
                    alt="Vector shape"
                    width={200}
                    height={200}
                    className="absolute -right-10 -bottom-15 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-adi-wicaksono/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card w-full bg-gradient-to-br from-secondary to-secondary/80 flex flex-col gap-6 md:gap-14 p-4 md:p-5 rounded-2xl md:rounded-3xl hover:shadow-[0_0_0_8px_rgba(16,185,129,0.2)] transition-all duration-300 hover:cursor-pointer relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-accent/20 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={Linkedinlogo}
                    alt="LinkedIn Logo"
                    width={48}
                    height={48}
                    className="relative z-10"
                  />
                  <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center">
                      <div className="rounded-full h-1.5 w-1.5 bg-neutral-dark" />
                      <div className="w-full h-[1px] bg-neutral-dark" />
                      <div className="rounded-full h-1.5 w-1.5 bg-neutral-dark" />
                    </div>
                    <p className="text-neutral-dark font-medium w-full text-right">Muhammad Adi Wicaksono</p>
                  </div>

                  <Image
                    src={Vector2}
                    alt="Vector shape"
                    width={100}
                    height={100}
                    className="absolute -top-5 right-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  />
                </a>
                <a
                  href="https://github.com/adi117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card w-full bg-transparent flex flex-col gap-6 md:gap-14 p-4 md:p-5 rounded-2xl md:rounded-3xl border-[1px] border-solid border-accent/50 hover:border-accent hover:shadow-[0_0_0_8px_rgba(6,182,212,0.1)] transition-all duration-300 hover:cursor-pointer group">
                  <Image
                    src={GithubLogo}
                    alt="GitHub Logo"
                    width={48}
                    height={48}
                    className="group-hover:text-accent transition-colors duration-300"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <div className="rounded-full h-1.5 w-1.5 bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
                      <div className="w-full h-[1px] bg-accent/30 group-hover:bg-accent/60 transition-colors duration-300" />
                      <div className="rounded-full h-1.5 w-1.5 bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
                    </div>
                    <p className="text-foreground/80 group-hover:text-accent font-medium w-full text-right transition-colors duration-300">github.com/adi117</p>
                  </div>
                </a>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
