import Section from "../section/section"

const Educations = () => {
  return (
    <Section title='Education'>
      <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
        <div className="card group w-full bg-gradient-to-br from-secondary via-secondary/80 to-accent/60 flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-[1px] border-secondary/40 hover:border-secondary hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <p className="text-neutral-dark bg-secondary/30 font-semibold px-2 py-0.5 rounded-full w-fit">
            2025
          </p>

          <div className="flex flex-col text-neutral-dark font-medium">
            <p className="text-xl opacity-70">Bootcamp</p>
            <p className="text-2xl font-bold line-clamp-2">
              Software Engineering/
              <br />
              Purwadhika DTI
            </p>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-neutral-dark/90">
              Completed an intensive Software Engineering Bootcamp at Purwadhika Digital Technology School, specializing in full-stack web development using <strong>React, Next.js, Java Spring Boot,</strong> and <strong>PostgreSQL</strong>
            </p>
            <ul className="list-disc list-inside text-neutral-dark/80 text-sm">
              <li>Developed and deployed scalable full-stack web applications following system design principles</li>
              <li>Built RESTful APIs, implemented caching with Redis, and integrated Grafana for performance monitoring</li>
              <li>Utilized Docker for containerized deployment and Git + Agile for team collaboration</li>
              <li>Enhanced backend expertise through Golang and GraphQL</li>
            </ul>
          </div>
        </div>

        <div className="card group w-full border-[1px] border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-primary/60 hover:shadow-[0_0_20px_rgba(107,70,193,0.2)]">
          <p className='text-foreground bg-primary/30 font-semibold px-2 py-0.5 rounded-full w-fit'>2023-2024</p>
          <div className='flex flex-col text-foreground font-medium'>
            <p className='text-xl opacity-70'>Bootcamp</p>
            <p className='text-2xl font-bold line-clamp-2'>
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

        <div className="card group w-full bg-gradient-to-br from-primary via-primary/80 to-secondary/60 flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-[1px] border-primary/40 hover:border-primary hover:shadow-[0_0_20px_rgba(107,70,193,0.3)]">
          <p className='text-foreground bg-primary/40 font-semibold px-2 py-0.5 rounded-full w-fit'>2019-2023</p>
          <div className='flex flex-col text-foreground font-medium'>
            <p className='text-xl opacity-70'>Bachelor Degree</p>
            <p className='text-2xl font-bold line-clamp-2'>
              Information System/
              <br />
              Brawijaya University
            </p>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-foreground/80">
              Focusing on system design, data modeling, and software development methodologies
            </p>
            <ul className="list-disc list-inside text-foreground/70 text-sm">
              <li>Developed strong technical foundations in system design, covering PRD creation, database schema design (ERD), sequence diagrams, system requirement analysis, and data modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Educations
