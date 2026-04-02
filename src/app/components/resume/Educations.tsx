"use client"

import { useState } from "react"
import Section from "../section/section"

const Educations = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const educationData = [
    {
      year: "2025",
      type: "Bootcamp",
      title: "Software Engineering / Purwadhika DTI",
      bgColor: "bg-gradient-to-br from-secondary via-secondary/80 to-accent/60",
      borderColor: "border-secondary/40",
      hoverBorder: "hover:border-secondary",
      shadowColor: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      badgeBg: "bg-secondary/30",
      textColor: "text-neutral-dark",
      description: "Completed an intensive Software Engineering Bootcamp at Purwadhika Digital Technology School, specializing in full-stack web development using React, Next.js, Java Spring Boot, and PostgreSQL",
      items: [
        "Developed and deployed scalable full-stack web applications following system design principles",
        "Built RESTful APIs, implemented caching with Redis, and integrated Grafana for performance monitoring",
        "Utilized Docker for containerized deployment and Git + Agile for team collaboration",
        "Enhanced backend expertise through Golang and GraphQL"
      ]
    },
    {
      year: "2023-2024",
      type: "Bootcamp",
      title: "My Digital Academy / Bank Mandiri",
      bgColor: "bg-gradient-to-br from-primary/10 to-accent/10",
      borderColor: "border-primary/40",
      hoverBorder: "hover:border-primary/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(107,70,193,0.2)]",
      badgeBg: "bg-primary/30",
      textColor: "text-foreground",
      description: "Focused on data analytics, dashboard development, and mobile app creation using OutSystems. Gained hands-on experience in Python for data processing, low-code development, and data-driven problem solving",
      items: [
        "Gained hands-on experience in data analytics, building interactive dashboards, and performing data visualization using Python",
        "Developed mobile applications using OutSystems, applying low-code development principles to solve real business challenges",
        "Deployed projects to production"
      ]
    },
    {
      year: "2019-2023",
      type: "Bachelor Degree",
      title: "Information System / Brawijaya University",
      bgColor: "bg-gradient-to-br from-primary via-primary/80 to-secondary/60",
      borderColor: "border-primary/40",
      hoverBorder: "hover:border-primary",
      shadowColor: "hover:shadow-[0_0_20px_rgba(107,70,193,0.3)]",
      badgeBg: "bg-primary/40",
      textColor: "text-foreground",
      description: "Focusing on system design, data modeling, and software development methodologies",
      items: [
        "Developed strong technical foundations in system design, covering PRD creation, database schema design (ERD), sequence diagrams, system requirement analysis, and data modeling"
      ]
    }
  ]

  return (
    <Section title='Education'>
      <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
        {educationData.map((edu, index) => (
          <button
            key={index}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className={`card w-full ${edu.bgColor} flex flex-col gap-3 p-5 rounded-3xl transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-[1px] ${edu.borderColor} ${expandedIndex === index ? `${edu.hoverBorder} ${edu.shadowColor} max-h-[9999px]` : 'max-h-44'} cursor-pointer`}
          >
            <p className={`${edu.textColor} ${edu.badgeBg} font-semibold px-2 py-0.5 rounded-full w-fit`}>
              {edu.year}
            </p>

            <div className={`flex flex-col ${edu.textColor} font-medium`}>
              <p className="text-xl opacity-70">{edu.type}</p>
              <p className="text-2xl font-bold">
                {edu.title}
              </p>
            </div>

            <div className={`${expandedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit`}>
              <p className={`${edu.textColor}/90`}>
                {edu.description}
              </p>
              <ul className={`list-disc list-inside ${edu.textColor}/80 text-sm`}>
                {edu.items.map((item, itemIndex) => (
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

export default Educations
