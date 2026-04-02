import Section from "../section/section"

const Experiences = () => {
  return (
    <Section title='Experience'>
      <div className='flex flex-col gap-5 overflow-y-scroll max-h-full pb-10 hide-scrollbar'>
        <div className="card group border-[1px] border-accent/40 w-full bg-gradient-to-br from-accent/10 to-secondary/5 flex flex-col gap-3 p-5 rounded-3xl max-h-56 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-accent/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <p className='text-foreground bg-accent/30 font-semibold px-2 py-0.5 rounded-full w-fit'>2024</p>
          <div className='flex flex-col text-foreground font-medium'>
            <p className='text-xl opacity-70'>LG Electronic</p>
            <p className='text-2xl font-bold'>
              R&D Engineer
              <br />
              Intern
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="rounded-full h-2 w-2 bg-accent/60" />
              <div className="w-full h-0.5 bg-accent/30" />
              <div className="rounded-full h-2 w-2 bg-accent/60" />
            </div>
            <div className='w-full flex justify-between'>
              <p className="text-foreground/80 font-medium w-full text-left">May</p>
              <p className="text-foreground/80 font-medium w-full text-right">Dec</p>
            </div>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-foreground/80">
              I focus on improving packaging efficiency and integrating automation into R&D operations for TV products across the European and CIS markets
            </p>
            <ul className="list-disc list-inside text-foreground/70 text-sm">
              <li>Developed RPA (Robotic Process Automation) solutions using UiPath to automate label registration and data monitoring processes, increasing efficiency by up to 10x</li>
              <li>Conducted packaging research, BOM creation, and printing quality analysis to ensure cost-effective, durable, and regulation-compliant designs</li>
            </ul>
          </div>
        </div>
        <div className="card group w-full bg-gradient-to-br from-primary via-primary/80 to-accent/60 flex flex-col gap-3 p-5 rounded-3xl max-h-56 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-[1px] border-primary/40 hover:border-primary hover:shadow-[0_0_20px_rgba(107,70,193,0.3)]">
          <p className='text-foreground bg-primary/40 font-semibold px-2 py-0.5 rounded-full w-fit'>2024</p>
          <div className='flex flex-col text-foreground font-medium'>
            <p className='text-xl opacity-70'>Vektora Studio</p>
            <p className='text-2xl font-bold'>
              UI/UX Designer
              <br />
              Intern
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="rounded-full h-2 w-2 bg-foreground" />
              <div className="w-full h-0.5 bg-foreground" />
              <div className="rounded-full h-2 w-2 bg-foreground" />
            </div>
            <div className='w-full flex justify-between'>
              <p className="text-foreground/80 font-medium w-full text-left">Mar</p>
              <p className="text-foreground/80 font-medium w-full text-right">May</p>
            </div>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-foreground/80">
              Vektora Studio is a creative design agency specializing in UI/UX design, web and mobile apps, branding, illustration, 3D, and front-end development.
            </p>
            <ul className="list-disc list-inside text-foreground/70 text-sm">
              <li>Designed responsive interfaces and landing pages that aligned with client branding and provided an optimal user experience across devices</li>
              <li>Developed a scalable design system featuring color palettes, typography, and reusable UI components to ensure consistency across all projects</li>
            </ul>
          </div>
        </div>
        <div className="card group w-full bg-gradient-to-br from-secondary via-secondary/80 to-primary/60 flex flex-col gap-3 p-5 rounded-3xl max-h-56 hover:max-h-[9999px] transition-[max-height,shadow] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-[1px] border-secondary/40 hover:border-secondary hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <p className='text-neutral-dark bg-secondary/30 font-semibold px-2 py-0.5 rounded-full w-fit'>2023</p>
          <div className='flex flex-col text-neutral-dark font-medium'>
            <p className='text-xl opacity-70'>SkillMapper</p>
            <p className='text-2xl font-bold'>
              UI/UX Designer
              <br />
              Intern
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="rounded-full h-2 w-2 bg-neutral-dark" />
              <div className="w-full h-0.5 bg-neutral-dark" />
              <div className="rounded-full h-2 w-2 bg-neutral-dark" />
            </div>
            <div className='w-full flex justify-between'>
              <p className="text-neutral-dark/80 font-medium w-full text-left">Mar</p>
              <p className="text-neutral-dark/80 font-medium w-full text-right">Dec</p>
            </div>
          </div>

          <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mt-3 space-y-2 h-fit">
            <p className="text-neutral-dark/90">
              AI-driven e-learning platform and community that helps learners discover curated learning paths, combining community insights and AI to make online learning more efficient and effective
            </p>
            <ul className="list-disc list-inside text-neutral-dark/80 text-sm">
              <li>Redesigned the SkillMapper Chrome Extension UI based on Hotjar analysis to enhance user engagement and interaction</li>
              <li>Designed the complete UI/UX for the SkillMapper mobile app and Learning & Development Employee website, including user flows, information architecture, wireframes, and interactive prototypes</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Experiences
