'use client'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../features/theme/theme-provider'
import { store } from '@/app/store/store'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  )
}
