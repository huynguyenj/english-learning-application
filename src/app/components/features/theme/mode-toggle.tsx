'use client'
import useTheme from "@/app/hooks/theme.hook"
import { saveTheme } from "@/app/store/theme.store"
import { Button } from "@/components/ui"
import { MonitorCog, Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function ModeToggle() {
    const [theme, setTheme] = useTheme()
    const [toggle, setToggle] = useState(false)
    
    const getIconTheme = (themeChoice: string) => {
      if (themeChoice === 'dark') return <Moon/>
      if (themeChoice === 'light') return <Sun/>
      return <MonitorCog/>
    }
    const handleToggle = () => {
      setToggle((prev) => !prev)
    }
    return (
      <div className="flex justify-end">
      <div className="relative group">
        <Button className="rounded-full w-10 h-10" onClick={handleToggle}>
          {getIconTheme(theme.value)}
        </Button>
           <Button className={`absolute ${!toggle ? '-translate-x-10 opacity-0 pointer-events-none' : 'opacity-100 -translate-x-22'} transition-translate duration-300`} onClick={() => setTheme(saveTheme('light'))}>
            {getIconTheme('light')}
          </Button>
          <Button className={`absolute ${!toggle ? '-translate-x-10 opacity-0  pointer-events-none': 'opacity-100 translate-y-12 -translate-x-10'} transition-translate duration-500`} onClick={() => setTheme(saveTheme('dark'))}>
            {getIconTheme('dark')}
          </Button>
           <Button className={`absolute ${!toggle ? '-translate-x-10 opacity-0 pointer-events-none' : 'opacity-100 translate-x-2'} transition-translate duration-700`} onClick={() => setTheme(saveTheme('system'))}>
            {getIconTheme('system')}
          </Button>
      </div>
      </div>

    )
}