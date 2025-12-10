'use client'
import { useLayoutEffect } from "react"
import { useAppDispatch, useAppSelector } from "./redux.hook"

export default function useTheme() {
  const theme = useAppSelector((state) => state.theme)
  const setTheme = useAppDispatch()
  useLayoutEffect(() => {
    document.documentElement.classList.remove('dark', 'light', 'system')
    let actualTheme = theme.value
    if (theme.value === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      actualTheme = systemPrefersDark ? 'dark' : 'light'
      console.log(actualTheme)
    }

    document.documentElement.classList.add(actualTheme)
  }, [theme.value])
  return [theme, setTheme] as const
}
