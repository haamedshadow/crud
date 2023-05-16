'use client'
import { ThemeProvider } from '@material-tailwind/react'

import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Provider({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}
