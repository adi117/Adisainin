"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import adisaininLogo from "@/../public/adisainin-logo.svg"

const Navbar = ({ setMenu }: { setMenu: (val: string) => void }) => {

  const menu = ["About Me", "Resume", "Works"];

  return (
    <div className="w-full flex gap-12 px-8 border-y-[1px] border-solid border-[#747474]">
      <Image
        src={adisaininLogo}
        alt="Adisainin Logo"
        width={44}
        height={44}
      />
      <Tabs
        defaultValue="About Me"
        onValueChange={setMenu}
        className="h-full">
        <TabsList className="w-full bg-background justify-start shadow-none rounded-none gap-14 h-full p-0">
          {menu.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="h-full border-0 rounded-none shadow-none border-b-2 border-b-transparent text-2xl font-medium text-[#747474] py-6
             data-[state=active]:border-b-foreground data-[state=active]:text-foreground"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default Navbar;