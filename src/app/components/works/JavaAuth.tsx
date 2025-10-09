import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Thumbnail from '../../../../public/java-auth/thumbnail.webp'
import Image from "next/image"
import Link from "next/link"

const JavaAuth = () => {
  return (
    <div className="flex flex-col gap-16 card">
      <div className="flex flex-col gap-5 w-full items-center">
        <h2 className="text-left font-medium w-full">Java Auth</h2>
        <div className="flex gap-2 w-full items-stretch py-2">
          <div className="w-0.5 bg-[#91D1AE]" />
          <span className="text-xl text-foreground/60">
            Secure access, simple flow
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
            The Java Auth System is a minimal yet functional authentication platform built to handle user registration and login using Java for the backend and a simple frontend interface. It focuses on implementing essential security practices such as password hashing and form validation, providing a reliable base for larger web applications. This project demonstrates a solid understanding of client-server communication, API integration, and authentication logic
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
                  <AccordionTrigger className="text-xl">User Registration & Login System</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Enables users to create accounts with secure password encryption and authenticates users using validated credentials and session management
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl">Frontend Integration</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Simple UI that communicates with backend APIs for smooth user interaction
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">Error Handling & Validation</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Ensures proper user feedback for invalid inputs or failed authentication
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
              <span className="text-lg"> - Full-stack React framework with SSR, PPR, and Server Actions</span>
            </li>
            <li>
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">Tailwind CSS</span>
              <span className="text-lg"> - Utility-first styling for modern UIs</span>
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
              <span className="text-foreground/90 border-b-2 border-[#91D1AE]">NextAuth.js</span>
              <span className="text-lg"> - Authentication solution with OAuth and credentials support for secure user access</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium">
            Challenges & Learnings
          </p>
          <div className="flex gap-2 w-full items-stretch mt-2">
            <div className="w-1 bg-[#91D1AE]" />
            <div className="text-2xl text-foreground/60 flex flex-col gap-4 py-2">
              <div className="flex flex-col">
                <span className="text-foreground/90 font-medium">
                  Managing Authentication Flow Between Frontend and Backend
                </span>
                <span className="text-lg">
                  Coordinating the login and registration process between the Java backend and frontend required handling API requests, managing user sessions, and ensuring proper data exchange. I learned how to structure authentication endpoints and connect them with the frontend to create a smooth and functional login experience
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-foreground/90 font-medium">
                  Handling User Data and Input Validation
                </span>
                <span className="text-lg">
                  Implementing form validation and error handling helped me understand how to maintain consistent data flow between the frontend and backend. I learned how to manage input states, display validation messages, and ensure that user data is correctly stored and retrieved from the database
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl">
            Live Demo & Code
          </p>
          <ul className="text-2xl text-foreground/60">
            <li>
              <span className="">Live Demo - </span>
              <Link target="_blank" href="" className="text-foreground/90 border-b-2 border-[#91D1AE]">To be deploy</Link>
            </li>
            <li>
              <span className="">Frontend - </span>
              <Link target="_blank" href="https://github.com/adi117/Java-Auth-FE" className="text-foreground/90 border-b-2 border-[#91D1AE]">Java-Auth-FE</Link>
            </li>
            <li>
              <span className="">Backend - </span>
              <Link target="_blank" href="https://github.com/adi117/Java-Auth-BE" className="text-foreground/90 border-b-2 border-[#91D1AE]">Java-Auth-BE</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JavaAuth