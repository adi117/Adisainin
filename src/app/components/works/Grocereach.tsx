import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Thumbnail from '../../../../public/grocereach/thumbnail.webp'
import Image from "next/image"
import Link from "next/link"

const Grocereach = () => {
  return (
    <div className="flex flex-col gap-16 card">
      <div className="flex flex-col gap-5 w-full items-center">
        <h2 className="text-left font-medium w-full">Grocereach</h2>
        <div className="flex gap-2 w-full items-stretch py-2">
          <div className="w-0.5 bg-[#91D1AE]" />
          <span className="text-xl text-foreground/60">
            Place where you can buy any grocery from your home
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
            Grocereach is an all-in-one online grocery platform that connects users to nearby stores, enabling them to browse products, manage profiles, and complete purchases with ease. It offers a smooth shopping experience with secure authentication, convenient checkout, and real-time shipping cost calculation. For store owners and admins, Grocereach provides powerful tools to manage stores, products, inventory, discounts, and orders, supported by insightful sales and stock reports that streamline operations and enhance decision-making
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
                  <AccordionTrigger className="text-xl">Homepage & Storefront</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      The homepage provides a welcoming landing experience where users can browse featured products, navigate easily through the site, and discover nearby stores based on their location. It includes key sections like the hero banner, product listings, and footer to create a smooth and engaging shopping journey
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl">User Authentication & Profiles</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Users can register using email or social accounts, verify their identity, and securely log in to manage their profiles. They can update personal details, set shipping addresses, and automatically calculate shipping costs during checkout for a convenient and personalized experience
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">Store Management</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Admins can create and manage multiple stores, assign store-specific administrators, and control user data within each store. This ensures smooth store operations and consistent management across all locations
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl">Product Management<p className="text-sm text-foreground/50">(my feature)</p></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      This feature allows admins to manage the entire product catalog—from adding and editing items to organizing them into categories. It also supports detailed product pages and search functionality, making it easy for customers to find what they need
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-xl">Inventory & Discount Management<p className="text-sm text-foreground/50">(my feature)</p></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Admins can track product stock levels, view journal history, and manage discounts effectively. With configurable discount settings and real-time inventory updates, the system ensures accurate stock control and attractive promotional offers
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-xl">Orders & Checkout</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Customers can easily add products to their cart, update quantities, and proceed through a streamlined checkout process. The system supports uploading payment proof, managing order history, and handling order cancellations or confirmations smoothly
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-xl">Order Management & Reports (Admin)<p className="text-sm text-foreground/50">(my feature)</p></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                    <p>
                      Admins can oversee all customer orders, confirm payments, manage shipping and stock adjustments, and handle cancellations. The reporting tools provide clear insights into sales and stock performance to support better business decisions
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
          <p className="text-3xl font-medium">
            Challenges & Learnings
          </p>
          <div className="flex gap-2 w-full items-stretch mt-2">
            <div className="w-1 bg-[#91D1AE]" />
            <div className="text-2xl text-foreground/60 flex flex-col gap-4 py-2">
              <div className="flex flex-col">
                <span className="text-foreground/90 font-medium">
                  Implementing Server-Side Rendering (SSR) with Next.js
                </span>
                <span className="text-lg">
                  Integrating SSR with a Spring Boot backend required precise coordination between API endpoints and server-rendered components. I learned how to structure server actions and handle data serialization efficiently to deliver dynamic yet performant pages.
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-foreground/90 font-medium">
                  Optimizing Database Operations with Spring Boot & JPA
                </span>
                <span className="text-lg">
                  Building robust APIs using JPA deepened my understanding of entity relationships and query behavior. For complex reporting features, I created custom SQL and JPQL queries to aggregate and transform data efficiently beyond what standard JPA methods offered.
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
              <Link target="_blank" href="https://grocereach.vercel.app/" className="text-foreground/90 border-b-2 border-[#91D1AE]">Vercel</Link>
            </li>
            <li>
              <span className="">Frontend - </span>
              <Link target="_blank" href="https://github.com/adi117/grocery-pwdk-fe" className="text-foreground/90 border-b-2 border-[#91D1AE]">grocery-pwdk-fe</Link>
            </li>
            <li>
              <span className="">Backend - </span>
              <Link target="_blank" href="https://github.com/adi117/grocery-pwdk-be" className="text-foreground/90 border-b-2 border-[#91D1AE]">grocery-pwdk-be</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Grocereach