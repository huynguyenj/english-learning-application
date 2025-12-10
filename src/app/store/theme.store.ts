import { createSlice } from "@reduxjs/toolkit"

const THEME_KEY = 'app-theme'
type ThemeValue = 'light' | 'dark' | 'system'
interface Theme {
  value: ThemeValue
}

const getInitialTheme = (): ThemeValue => {
   if (typeof window !== 'undefined') {
    const themeValue = localStorage.getItem(THEME_KEY)
    return themeValue ? themeValue as ThemeValue : 'light'
  }
  return 'light'
}

const initialValue: Theme = {
  value: getInitialTheme()
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialValue,
  reducers: {
      saveTheme(state, action) {
        state.value = action.payload
        localStorage.setItem(THEME_KEY, state.value)
      },
  }
})

export const { saveTheme } = themeSlice.actions
export default themeSlice.reducer