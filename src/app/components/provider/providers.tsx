'use client'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store/store'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
