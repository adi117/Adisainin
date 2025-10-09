import Link from 'next/link'
import Thumbnail from '../../../../public/mai-home/thumbnail.webp'
import Image from "next/image"

const MaiHome = () => {
  return (
    <div className="flex flex-col gap-16 card">
      <div className="flex flex-col gap-5 w-full items-center">
        <h2 className="text-left font-medium w-full">Mai Home</h2>
        <div className="flex gap-2 w-full items-stretch py-2">
          <div className="w-0.5 bg-[#91D1AE]" />
          <span className="text-xl text-foreground/60">
            Browse your dream house
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
            Mai Home is a modern property discovery platform that helps users find and purchase their ideal homes with ease. Designed for simplicity and trust, it showcases a curated selection of houses, apartments, and real estate listings from verified sellers. With an intuitive interface, detailed property insights, and location-based recommendations, Mai Home makes the home-buying journey seamless—from browsing to ownership. Whether you&apos;re searching for your first home or your next investment, Mai Home connects you to the right place, every time
          </span>
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
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl">
            Live Demo & Code
          </p>
          <ul className="text-2xl text-foreground/60">
            <li>
              <span className="">Live Demo - </span>
              <Link target="_blank" href="https://code-challenge-landing-page.vercel.app/" className="text-foreground/90 border-b-2 border-[#91D1AE]">Vercel</Link>
            </li>
            <li>
              <span className="">Frontend - </span>
              <Link target="_blank" href="https://github.com/adi117/Code-Challenge---Landing-Page" className="text-foreground/90 border-b-2 border-[#91D1AE]">Landing-Page</Link>
            </li>
            <li>
              <span className="">Backend - </span>
              <Link target="_blank" href="" className="text-foreground/90 border-b-2 border-[#91D1AE]">-</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MaiHome