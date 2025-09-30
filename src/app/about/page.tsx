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

      tl.from(introductionRef.current, { y: 100, opacity: 0, duration: 1 });
      tl.from(q(".card"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
      }, "-=0.5");
    }, introductionRef);

    const imageCtx = gsap.context(() => {
      gsap.from(imageRef.current, {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power3.inOut"
      });
    })

    return () => {
      introductionCtx.revert();
      imageCtx.revert();
    }
  }, [])

  return (
    <div className="flex gap-9 px-4 overflow-hidden" style={{ height: "calc(100vh - 160px)" }}>
      <div
        ref={imageRef}
        className="relative w-2/5"
        style={{ height: "100%" }}
      >
        <Image
          src={ProfilePhoto}
          alt="Profile Photo"
          priority
          className="w-full h-full object-cover rounded-4xl"
        />
        <div className="font-medium text-background flex flex-col absolute left-7 top-7">
          <p className="text-2xl">Hello,</p>
          <p className="text-7xl">
            I&apos;m Adi
          </p>
        </div>
        <div className="text-sm text-background absolute right-7 bottom-7 text-right w-[400px]">
          A fullstack developer with a creative mindset. Detail-oriented, adaptable,
          and a bit of a perfectionist, I thrive on collaboration, clear
          communication, and solving problems with both logic and creativity.
        </div>
      </div>
      <div className="w-3/5 h-full overflow-y-scroll max-h-full hide-scrollbar pb-10">
        <div ref={introductionRef} className="flex flex-col gap-10">
          {/* Introduction section */}
          <Section title="Introduction">
            <div className="card flex flex-col gap-9 px-8 py-3 border-[1px] border-solid border-[#747474] rounded-[36px]">
              <h2 className="text-[40px] font-semibold">A wizard based in Surakarta</h2>
              <div className="flex relative">
                <p className="opacity-50 pr-44 font-medium">
                  Once a UI/UX spellcaster, now a fullstack wizard—I craft seamless digital experiences from pixel to production. With roots in world and interaction design, I blend creative vision with technical precision to build products that are as powerful as they are beautiful.
                  <br />
                  <br />
                  Let&apos;s make the web more magical—one pixel at a time.</p>

                <Image
                  src={WizardHat}
                  alt="Wizard Hat"
                  priority
                  className="w-40 h-40 object-cover absolute right-0 bottom-0"
                />
              </div>
            </div>
          </Section>
          {/* divider line */}
          <div className="w-full bg-[#747474] h-[1px]" />
          <div className="card">
            {/* contact card */}
            <Section title="Get In Touch">
              <div className="flex w-full gap-8">
                <a
                  href="mailto:muhammadiwicaksono@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card w-full bg-[#874FD4] flex flex-col gap-14 p-5 rounded-3xl hover:shadow-[0_0_0_4px_rgba(135,79,212,0.25)] transition-shadow duration-200 hover:cursor-pointer relative overflow-hidden">
                  <Image
                    src={GoogleLogo}
                    alt="Google Logo"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center">
                      <div className="rounded-full h-1.5 w-1.5 bg-background" />
                      <div className="w-full h-[1px] bg-background" />
                      <div className="rounded-full h-1.5 w-1.5 bg-background" />
                    </div>
                    <p className="text-background font-medium w-full text-right">muhammadiwicaksono@gmail.com</p>
                  </div>

                  <Image
                    src={Vector1}
                    alt="Vector shape"
                    width={200}
                    height={200}
                    className="absolute -right-10 -bottom-15 z-0"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-adi-wicaksono/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card w-full bg-[#91D1AE] flex flex-col gap-14 p-5 rounded-3xl hover:shadow-[0_0_0_4px_rgba(145,209,174,0.25)] transition-shadow duration-200 hover:cursor-pointer relative overflow-hidden">
                  <Image
                    src={Linkedinlogo}
                    alt="LinkedIn Logo"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <div className="rounded-full h-1.5 w-1.5 bg-[#215441]" />
                      <div className="w-full h-[1px] bg-[#215441]" />
                      <div className="rounded-full h-1.5 w-1.5 bg-[#215441]" />
                    </div>
                    <p className="text-[#215441] font-medium w-full text-right">Muhammad Adi Wicaksono</p>
                  </div>

                  <Image
                    src={Vector2}
                    alt="Vector shape"
                    width={100}
                    height={100}
                    className="absolute -top-5 right-0"
                  />
                </a>
                <a
                  href="https://github.com/adi117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card w-full bg-transparent flex flex-col gap-14 p-5 rounded-3xl border-[1px] border-solid border-foreground hover:shadow-[0_0_0_4px_rgba(48,41,48,0.25)] transition-shadow duration-200 hover:cursor-pointer">
                  <Image
                    src={GithubLogo}
                    alt="GitHub Logo"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <div className="rounded-full h-1.5 w-1.5 bg-foreground" />
                      <div className="w-full h-[1px] bg-foreground" />
                      <div className="rounded-full h-1.5 w-1.5 bg-foreground" />
                    </div>
                    <p className="text-foreground font-medium w-full text-right">github.com/adi117</p>
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