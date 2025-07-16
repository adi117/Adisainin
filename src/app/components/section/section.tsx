import { ReactNode } from "react"

const Section = ({title, children} : {title: string, children: ReactNode}) => {
  return (
    <div className="flex flex-col gap-9">
      <h2 className="text-[40px] font-semibold">{title}</h2>
      {children}
    </div>
  )
}

export default Section