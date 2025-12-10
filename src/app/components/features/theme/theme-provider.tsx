import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const ModeToggle = dynamic(() => import("@/components/features/theme/mode-toggle"), { ssr: false })

export function ThemeProvider({ children }: PropsWithChildren) {
   return (
      <ModeToggle/>
   )
}