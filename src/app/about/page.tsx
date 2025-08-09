import Image from "next/image";
import ProfilePhoto from "@/../public/profile-photo.webp"
import Section from "../components/section/section";
import GithubLogo from "@/../public/github-logo.svg"
import Linkedinlogo from "@/../public/linkedin-logo.svg"
import GoogleLogo from "@/../public/google-logo.svg"
import WizardHat from "@/../public/wizard-hat.webp"

const AboutPage = () => {
  return (
    <div className="flex gap-9 px-4">
      <div
        className="relative w-2/5"
        style={{ height: "calc(100vh - 160px)" }}
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
            My name <br /> is Adi
          </p>
        </div>
        <div className="text-sm text-background absolute right-7 bottom-7 text-right w-[400px]">
          A fullstack developer with a creative mindset. Detail-oriented, adaptable,
          and a bit of a perfectionist, I thrive on collaboration, clear
          communication, and solving problems with both logic and creativity.
        </div>
      </div>
      <div className="flex flex-col w-3/5 gap-10">
        {/* Introduction section */}
        <Section title="Introduction">
          <div className="flex flex-col gap-9 px-8 py-3 border-[1px] border-solid border-[#747474] rounded-[36px]">
            <h2 className="text-[40px] font-semibold">A wizard based in Surakarta</h2>
            <div className="flex relative">
              <p className="opacity-50 pr-44 font-medium">
                Once a UI/UX spellcaster, now a fullstack wizard—I craft seamless digital experiences from pixel to production. With roots in world and interaction design, I blend creative vision with technical precision to build products that are as powerful as they are beautiful.
                <br />
                <br />
                Let’s make the web more magical—one pixel at a time.</p>

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
        {/* contact card */}
        <Section title="Get In Touch">
          <div className="flex w-full gap-8">
            <a
              href="muhammadiwicaksono@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#874FD4] flex flex-col gap-14 p-5 rounded-3xl hover:shadow-[0_0_0_4px_rgba(135,79,212,0.25)] transition-shadow duration-200 hover:cursor-pointer">
              <Image
                src={GoogleLogo}
                alt="Google Logo"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <div className="rounded-full h-1.5 w-1.5 bg-[#3E246E]" />
                  <div className="w-full h-[1px] bg-[#3E246E]" />
                  <div className="rounded-full h-1.5 w-1.5 bg-[#3E246E]" />
                </div>
                <p className="text-[#3E246E] font-medium w-full text-right">muhammadiwicaksono@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-adi-wicaksono/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#91D1AE] flex flex-col gap-14 p-5 rounded-3xl hover:shadow-[0_0_0_4px_rgba(145,209,174,0.25)] transition-shadow duration-200 hover:cursor-pointer">
              <Image
                src={Linkedinlogo}
                alt="Google Logo"
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
            </a>
            <a
              href="https://github.com/adi117"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-transparent flex flex-col gap-14 p-5 rounded-3xl border-[1px] border-solid border-foreground hover:shadow-[0_0_0_4px_rgba(48,41,48,0.25)] transition-shadow duration-200 hover:cursor-pointer">
              <Image
                src={GithubLogo}
                alt="Google Logo"
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
  )
}

export default AboutPage;