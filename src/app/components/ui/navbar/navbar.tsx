'use client'
import Image from "next/image"
import Logo from '@/public/logo/EL_logo.png'
const ModeToggle = dynamic(() => import("@/components/features/theme/mode-toggle"), { ssr: false })

import { Menu } from "lucide-react"
import dynamic from "next/dynamic"
export default function Navbar() {
  return (
    <div className="fixed top-0 z-999 w-full flex justify-between py-5 px-25">
      <div className="flex justify-center items-center gap-3">
            <Image alt="logo" src={Logo} width={50} height={50} className="rounded-full"/>
            <p className="text-secondary-mobile xl:text-sm-title-desktop font-medium">English Learning</p>
      </div>
      <div className="flex justify-center items-center gap-5">
            <ModeToggle/>
            <div>
                  <Menu/>
            </div>
      </div>
    </div>
  )
}
