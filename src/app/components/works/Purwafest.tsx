import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Thumbnail from '../../../../public/purwafest/thumbnail.webp'
import Image from "next/image"
import Link from "next/link"

const Purwafest = () => {
  return (
    <div className="flex flex-col gap-16 card">
      <div className="flex flex-col gap-5 w-full items-center">
        <h2 className="text-left font-medium w-full">Purwafest</h2>
        <div className="flex gap-2 w-full items-stretch py-2">
          <div className="w-0.5 bg-[#91D1AE]" />
          <span className="text-xl text-foreground/60">
            Your All-in-One Event Management and Ticketing Platform
          </span>
        </div>
        <Image
          src={Thumbnail}
          alt="Grocereach Thumbnail"
          width={100}
          height={200}
          unoptimized
          className="w-3/4 h-auto rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium">
            Overview
          </p>
          <span className="text-xl text-foreground/60">
            Purwafest is a modern event management and ticketing platform that simplifies how people discover, organize, and attend events. It offers an integrated system for event creation, ticket sales, promotions, and user engagement—all within a clean and intuitive interface. With secure transactions, real-time insights, and flexible promotional tools, Purwafest empowers organizers to manage their events efficiently while providing users with a seamless ticket booking experience
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium">
            Features
          </p>
          <div className="w-full p-3 flex justify-center border-[1px] border-foreground/10 rounded-2xl">
            <div className="w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl">Event Management<p className="text-sm text-foreground/50">(my feature)</p></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Organizers can easily create and manage events, including details like schedules, venues, and ticket categories. This feature ensures that events are well-structured, visually appealing, and easy for users to browse and join
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl">Ticketing & Transactions<p className="text-sm text-foreground/50">(my feature)</p></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Purwafest provides a secure and transparent ticketing system where users can purchase tickets, make payments, and receive instant confirmations. It also supports multiple payment methods and order tracking for a smooth end-to-end transaction experience
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">Promotions & Referrals</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      To help organizers attract more attendees, Purwafest includes tools for creating discount codes, referral programs, and promotional campaigns. These features enhance visibility and encourage user engagement through rewards and special offers
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl">Dashboard & User Engagement</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      A unified dashboard gives both users and organizers valuable insights—organizers can monitor sales and attendance, while users can view their ticket history, reviews, and upcoming events. This centralized view supports better decision-making and a more personalized event experience
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium">
            Tech Stack
          </p>
          <ul className="text-xl text-foreground/60 list-disc marker:text-sm marker:text-foreground/50 pl-5">
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">Next.Js</span>
              <span className="text-lg"> - Full-stack React framework with SSR</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">Tailwind CSS</span>
              <span className="text-lg"> - Utility-first styling for modern UIs</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">Shadcn UI</span>
              <span className="text-lg"> - Accessible component library built on Radix</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">Spring Boot</span>
              <span className="text-lg"> - Backend framework for building robust and production-ready REST APIs</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">PostgreSQL (Neon)</span>
              <span className="text-lg"> - Cloud-hosted relational database with branch-based workflows and auto-scaling</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">Redis</span>
              <span className="text-lg"> - In-memory data store for caching, session management, and performance optimization</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">NextAuth.js</span>
              <span className="text-lg"> - Authentication solution with OAuth and credentials support for secure user access</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl">
            Live Demo & Code
          </p>
          <ul className="text-2xl text-foreground/60">
            <li>
              <span className="">Live Demo - </span>
              <Link target="_blank" href="https://event-ticketing-fe.vercel.app/" className="text-foreground/90 border-b-2 border-[#91D1AE]">Vercel</Link>
            </li>
            <li>
              <span className="">Frontend - </span>
              <Link target="_blank" href="https://github.com/adi117/event-ticketing-fe" className="text-foreground/90 border-b-2 border-[#91D1AE]">event-ticketing-fe</Link>
            </li>
            <li>
              <span className="">Backend - </span>
              <Link target="_blank" href="https://github.com/adi117/event-ticketing-be" className="text-foreground/90 border-b-2 border-[#91D1AE]">event-ticketing-be</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Purwafest