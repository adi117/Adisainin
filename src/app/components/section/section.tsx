import { ReactNode } from "react"

const Section = ({title, children} : {title: string, children: ReactNode}) => {
  return (
    <div className="flex flex-col gap-9 h-full">
      <h2 className="text-3xl font-semibold shrink-0">{title}</h2>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  )
}

export default Section