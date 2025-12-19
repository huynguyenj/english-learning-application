'use client'

import { cn } from "@/app/utils/cn"
import { createContext, PropsWithChildren, useContext,  useMemo,  useState } from "react"

type PopoverContextProps = {
  isOpen: boolean
  setOpen: (state: boolean) => void
}

const PopoverContext = createContext<PopoverContextProps | undefined>(undefined)

function usePopoverContext() {
  const context = useContext(PopoverContext)
  if (!context) throw new Error('Please wrap component with PopoverWrapper!')
  return context
}

function PopoverWrapper({ children }: PropsWithChildren) {
 const [isOpen, setOpen] = useState(false)
  const contextValue: PopoverContextProps = useMemo(() => ({
    isOpen,
    setOpen
  }), [isOpen, setOpen])
  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  )
}

function PopoverContent({ className, children, ...prop }: { className?: string, children: React.ReactNode }) {
  const { isOpen } = usePopoverContext()
  if (!isOpen) return null
  return (
      <div className={cn("absolute max-w-[350px] p-5 rounded-[10px] bg-popover text-popover text-m-body-desktop", className)} {...prop}>
            {children}
      </div>
  )
}

function PopoverTrigger({ children }: PropsWithChildren) {
   const { isOpen, setOpen } = usePopoverContext()
   return (
      <div onClick={() => setOpen(!isOpen)}>
        {children}
      </div>
   )
}

export { PopoverWrapper, PopoverTrigger, PopoverContent  }

// bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden