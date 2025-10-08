import Section from "../section/section"

const Educations = () => {
  return (
    <Section title='Education'>
      <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
        <div className="card group w-full bg-[#91D1AE] flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
          <p className="text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit">
            2025
          </p>

          <div className="flex flex-col text-foreground font-medium">
            <p className="text-xl opacity-50">Bootcamp</p>
            <p className="text-2xl">
              Software Engineering/
              <br />
              Purwadhika DTI
            </p>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-foreground/80">
              Completed an intensive Software Engineering Bootcamp at Purwadhika Digital Technology School, specializing in full-stack web development using <strong>React, Next.js, Java Spring Boot,</strong> and <strong>PostgreSQL</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/70 text-sm">
              <li>Developed and deployed scalable full-stack web applications following system design principles</li>
              <li>Built RESTful APIs, implemented caching with Redis, and integrated Grafana for performance monitoring</li>
              <li>Utilized Docker for containerized deployment and Git + Agile for team collaboration</li>
              <li>Enhanced backend expertise through Golang and GraphQL</li>
            </ul>
          </div>
        </div>

        <div className="card group w-full border border-foreground bg-transparent flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
          <p className='text-background bg-foreground font-semibold px-2 py-0.5 rounded-full w-fit'>2023-2024</p>
          <div className='flex flex-col text-foreground font-medium'>
            <p className='text-xl opacity-50'>Bootcamp</p>
            <p className='text-2xl'>
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

        <div className="card group w-full bg-[#874FD4] flex flex-col gap-3 p-5 rounded-3xl max-h-44 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
          <p className='text-foreground bg-background font-semibold px-2 py-0.5 rounded-full w-fit'>2019-2023</p>
          <div className='flex flex-col text-background font-medium'>
            <p className='text-xl text-background/50'>Bachelor Degree</p>
            <p className='text-2xl text-background'>
              Information System/
              <br />
              Brawijaya University
            </p>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-background/70">
              Focusing on system design, data modeling, and software development methodologies
            </p>
            <ul className="list-disc list-inside text-background/60 text-sm">
              <li>Developed strong technical foundations in system design, covering PRD creation, database schema design (ERD), sequence diagrams, system requirement analysis, and data modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Educations