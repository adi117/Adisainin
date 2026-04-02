"use client"

import { useState } from "react"
import Section from "../section/section"

const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experienceData = [
    {
      year: "2024",
      company: "LG Electronic",
      position: "R&D Engineer",
      subposition: "Intern",
      startMonth: "May",
      endMonth: "Dec",
      bgColor: "bg-gradient-to-br from-accent/10 to-secondary/5",
      borderColor: "border-accent/40",
      hoverBorder: "hover:border-accent/70",
      shadowColor: "hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
      badgeBg: "bg-accent/30",
      dotColor: "bg-accent/60",
      dotLineColor: "bg-accent/30",
      description: "I focus on improving packaging efficiency and integrating automation into R&D operations for TV products across the European and CIS markets",
      items: [
        "Developed RPA (Robotic Process Automation) solutions using UiPath to automate label registration and data monitoring processes, increasing efficiency by up to 10x",
        "Conducted packaging research, BOM creation, and printing quality analysis to ensure cost-effective, durable, and regulation-compliant designs"
      ]
    },
    {
      year: "2024",
      company: "Vektora Studio",
      position: "UI/UX Designer",
      subposition: "Intern",
      startMonth: "Mar",
      endMonth: "May",
      bgColor: "bg-gradient-to-br from-primary via-primary/80 to-accent/60",
      borderColor: "border-primary/40",
      hoverBorder: "hover:border-primary",
      shadowColor: "hover:shadow-[0_0_20px_rgba(107,70,193,0.3)]",
      badgeBg: "bg-primary/40",
      dotColor: "bg-foreground",
      dotLineColor: "bg-foreground",
      description: "Vektora Studio is a creative design agency specializing in UI/UX design, web and mobile apps, branding, illustration, 3D, and front-end development.",
      items: [
        "Designed responsive interfaces and landing pages that aligned with client branding and provided an optimal user experience across devices",
        "Developed a scalable design system featuring color palettes, typography, and reusable UI components to ensure consistency across all projects"
      ]
    },
    {
      year: "2023",
      company: "SkillMapper",
      position: "UI/UX Designer",
      subposition: "Intern",
      startMonth: "Mar",
      endMonth: "Dec",
      bgColor: "bg-gradient-to-br from-secondary via-secondary/80 to-primary/60",
      borderColor: "border-secondary/40",
      hoverBorder: "hover:border-secondary",
      shadowColor: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      badgeBg: "bg-secondary/30",
      dotColor: "bg-neutral-dark",
      dotLineColor: "bg-neutral-dark",
      textColor: "text-neutral-dark",
      description: "AI-driven e-learning platform and community that helps learners discover curated learning paths, combining community insights and AI to make online learning more efficient and effective",
      items: [
        "Redesigned the SkillMapper Chrome Extension UI based on Hotjar analysis to enhance user engagement and interaction",
        "Designed the complete UI/UX for the SkillMapper mobile app and Learning & Development Employee website, including user flows, information architecture, wireframes, and interactive prototypes"
      ]
    }
  ]

  return (
    <Section title='Experience'>
      <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
        {experienceData.map((exp, index) => (
          <button
            key={index}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className={`card border-[1px] w-full ${exp.bgColor} flex flex-col gap-3 p-5 rounded-3xl transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${exp.borderColor} ${expandedIndex === index ? `${exp.hoverBorder} ${exp.shadowColor} max-h-[9999px]` : 'max-h-56'} cursor-pointer`}
          >
            <p className={`${exp.textColor || 'text-foreground'} ${exp.badgeBg} font-semibold px-2 py-0.5 rounded-full w-fit`}>
              {exp.year}
            </p>
            <div className={`flex flex-col ${exp.textColor || 'text-foreground'} font-medium`}>
              <p className="text-xl opacity-70">{exp.company}</p>
              <p className="text-2xl font-bold">
                {exp.position}
                <br />
                {exp.subposition}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <div className={`rounded-full h-2 w-2 ${exp.dotColor}`} />
                <div className={`w-full h-0.5 ${exp.dotLineColor}`} />
                <div className={`rounded-full h-2 w-2 ${exp.dotColor}`} />
              </div>
              <div className={`w-full flex justify-between`}>
                <p className={`${exp.textColor || 'text-foreground'}/80 font-medium w-full text-left`}>{exp.startMonth}</p>
                <p className={`${exp.textColor || 'text-foreground'}/80 font-medium w-full text-right`}>{exp.endMonth}</p>
              </div>
            </div>

            <div className={`${expandedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit`}>
              <p className={`${exp.textColor || 'text-foreground'}/80`}>
                {exp.description}
              </p>
              <ul className={`list-disc list-inside ${exp.textColor || 'text-foreground'}/70 text-sm`}>
                {exp.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}

export default Experiences
